import { queryOptions } from "@tanstack/react-query";
import { type JsonDB } from "generateDb";

import { api } from "@/lib/api";

export function creditCardsOptions(id: string) {
  return queryOptions({
    queryKey: ["creditCards", id],
    queryFn: () =>
      api.get(`/api/users?id=${id}`).then(async (res) => {
        const data = (await res.json()) as JsonDB["users"];
        return data[0].creditCards;
      }),
    staleTime: 5 * 1000,
  });
}
