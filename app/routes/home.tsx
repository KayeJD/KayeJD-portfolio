import type { Route } from "./+types/home";
import { Welcome } from "../pages/Welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Karryl's Website" },
    { name: "description", content: "Karryl's Portfolio" },
  ];
}

export default function Home() {
  return <Welcome />;
}
