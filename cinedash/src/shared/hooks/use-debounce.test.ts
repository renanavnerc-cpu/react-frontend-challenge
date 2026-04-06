import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useDebounce } from "./use-debounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("deve retornar o valor inicial imediatamente", () => {
    const { result } = renderHook(() => useDebounce("teste", 500));
    expect(result.current).toBe("teste");
  });

  it("deve atualizar o valor após o delay", () => {
    let value = "primeiro";
    const { result, rerender } = renderHook(() => useDebounce(value, 500));

    expect(result.current).toBe("primeiro");

    value = "segundo";
    rerender();

    expect(result.current).toBe("primeiro");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("segundo");
  });

  it("deve limpar o timeout anterior ao mudar valor rapidamente", () => {
    let value = "a";
    const { result, rerender } = renderHook(() => useDebounce(value, 500));

    value = "b";
    rerender();

    act(() => {
      vi.advanceTimersByTime(250);
    });

    value = "c";
    rerender();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("c");
  });
});
