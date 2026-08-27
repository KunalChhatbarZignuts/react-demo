import { CLIENT_STATIC_FILES_PATH } from "next/dist/shared/lib/constants";
import { redirect } from "next/navigation";

export default function Home() {
    // Redirect the root path "/" to the default dashboard route
    redirect("/products/create");
}
