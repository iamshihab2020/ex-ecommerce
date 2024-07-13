import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const {
    data: category = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`/category.json`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return { category, isLoading, refetch };
};

export default useCategory;
