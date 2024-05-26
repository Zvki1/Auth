import { Bell } from "lucide-react"


const NotificationsEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 md:py-24">
      <Bell className="h-12 w-12 text-[#112377]" />
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-semibold">Pas de nouvelles notification</h3>
        <p className="text-gray-500 dark:text-gray-400">Veuillez revenir plus tard pour des nouvelles notifications.</p>
      </div>
    </div>
  )
}

export default NotificationsEmptyState