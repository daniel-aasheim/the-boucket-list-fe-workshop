import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BoucketList } from "../types/types";
import {
  createList,
  fetchAllLists,
  updateList,
  deleteList,
} from "../api/listsEndpoint";

/*
 * TODO 5: Implement TanStack Query.
 * This will allow us to remove the useEffect() from the AllBoucketLists.tsx component.
 * It will also simplify the synchronization of the UI state with the server state when performing CRUD operations.
 * Tip: Checkout useCurrentBoucketItems.ts and useUnassignedBoucketItems.ts files to see how the hooks are implemented.
 */

export function useBoucketLists() {
  /*
   *TODO 5a: Initialize the query client using useQueryClient
   */
  // const queryClient = ...

  /*
   * TODONT 5: The useQuery hook has been implemented for you!
   * This hook is called whenever a component calls it directly, or when the query is invalidated by another hook with the corresponding query key.
   */
  const { data: lists, isLoading } = useQuery<BoucketList[], Error>({
    queryFn: fetchAllLists,
    queryKey: ["lists"],
  });

  /*
   * TODO 5b: Create a function to invalidate the "lists" query.
   * Hint: Use the queryClient you initialized in TODO 5a.
   */
  function invalidateLists(): void {
    // Your code here...
  }

  /*
   * TODO 5c: Use the useMutation hook for creating a list.
   * Hint: Use createList as the mutation function and call invalidateLists function on success.
   */
  const { mutateAsync: createListAsync } = useMutation({
    // Your code here...
  });

  /*
   * TODO 5d: Use the useMutation hook for updating a list.
   * Hint: Use updateList as the mutation function and call invalidateLists function on success.
   */
  const { mutateAsync: updateListAsync } = useMutation({
    // Your code here...
  });

  /*
   * TODO 5e: Use the useMutation hook for deleting a list.
   * Hint: Use deleteList as the mutation function and call invalidateLists function on success.
   */
  const { mutateAsync: deleteListAsync } = useMutation({
    // Your code here...
  });

  return {
    lists,
    isLoading,
    createListAsync,
    updateListAsync,
    deleteListAsync,
  };
}
