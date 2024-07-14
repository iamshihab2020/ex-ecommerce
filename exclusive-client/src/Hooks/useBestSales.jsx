import { useQuery } from "@tanstack/react-query";

const useBestSales = () => {
  const {
    data: bestSales = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bestSales"],
    queryFn: async () => {
      const res = await fetch(`/bestSales.json`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return { bestSales, isLoading, refetch };
};

export default useBestSales;
