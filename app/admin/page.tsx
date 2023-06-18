import React from "react";
import { redirect } from "next/navigation";

function page() {
  if (true) {
    redirect("/");
  }

  return <div>Admin</div>;
}

export default page;
