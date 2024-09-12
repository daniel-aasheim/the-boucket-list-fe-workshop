import { BoucketList } from "../types/types";
import axios from "axios";
import { API_BASE_URL } from "./apiBaseUrl";

/*
 * TODO 1: Define the parameters for the API functions.
 * Tip: see 'https://the-boucket-list.azurewebsites.net' for definition of the API.
 * (or cheat by looking for clues in itemsEndpoint.ts).
 */

/*
 *TODONT 1: The parameters for the createList function has been defined for you!
 */
interface CreateListParams {
  name: string;
  description: string;
}

/*
 *TODO 1a: Define the parameters (if any) for the fetchList function
 */
interface FetchListParams {
  // Your code here...
}

/*
 *TODO 1b: Define the parameters (if any) for the updateList function
 */
interface UpdateListParams {
  // Your code here...
}

/*
 * TODO 1c: Define the parameters (if any) for the deleteList function
 */
interface DeleteListParams {
  // Your code here...
}

/*
 * TODO 1d: Define the parameters (if any) for the fetchAllLists function
 */
interface GetAllListsParams {
  // Your code here...
}

/*
 * TODO 2: Implement the API functions.
 * If you're stuck, just check out the API functions in itemsEndpoint.ts.
 */

/*
 *TODONT 2: The createList function has been implemented for you!
 */
export const createList = async ({
  name,
  description,
}: CreateListParams): Promise<BoucketList> => {
  const response = await axios.post(`${API_BASE_URL}/api/boucket-lists/new`, {
    name,
    description,
  });
  return response.data;
};

/*
 *TODO 2a: Implement the fetchList function
 */
export const fetchList = async ({}: FetchListParams): Promise<BoucketList> => {
  // Your code here...
  return {} as BoucketList; // ...and here
};

/*
 *TODO 2b: Implement the updateList function
 */
export const updateList =
  async ({}: UpdateListParams): Promise<BoucketList> => {
    // Your code here...
    return {} as BoucketList; // ...and here
  };

/*
 *TODO 2c: Implement the deleteList function
 */
export const deleteList = async ({}: DeleteListParams): Promise<void> => {
  // Your code here...
};

/*
 *TODO 2d: Implement the fetchAllLists function
 */
export const fetchAllLists = async (): Promise<BoucketList[]> => {
  // Your code here...
  return [] as BoucketList[]; // ...and here
};
