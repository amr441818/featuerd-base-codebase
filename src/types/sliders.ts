export interface SliderItemI  {
  id: string;
  title: string;
  image: string;
  type: "internal" | "external"; // assuming only these two types
  sort: number;
  url: string | null;
  linkable_id: number;
  linkable_type: "company" | "user" | "post" | string; // expand based on use case
};