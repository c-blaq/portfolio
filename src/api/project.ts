import { IProjects } from "@/types/project";
import { client } from "../../sanity/lib/client";

export const getProjects = async () => {
  const projectQuery = "*[_type == 'Projects']";
  const data = await client.fetch(projectQuery);

  return data as IProjects[];
};
