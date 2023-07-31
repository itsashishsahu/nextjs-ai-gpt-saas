import { UserButton } from "@clerk/nextjs";
import DashboardLayout from "../../layout";



const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (Protected) </p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboardPage;