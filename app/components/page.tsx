// app/components/page.tsx
import { redirect } from "next/navigation";

export default function ComponentsHome() {
  redirect("/components/footer"); // or show a welcome message
}