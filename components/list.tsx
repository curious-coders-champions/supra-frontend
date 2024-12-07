import { ReactNode } from "react";

type ListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
};

export function List<T>({ data, renderItem }: ListProps<T>) {
  return data?.map((item, index) => renderItem(item, index));
}
