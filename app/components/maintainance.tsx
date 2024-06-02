/**
 * v0 by Vercel.
 * @see https://v0.dev/t/urOAQvpXbTJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Maintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4">
      <div className="max-w-md text-center space-y-4">
        <WrenchIcon className="h-16 w-16 mx-auto text-gray-500 dark:text-gray-400" />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Site Under Maintenance</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We're currently performing scheduled maintenance. The site will be back up and running shortly.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Please check back in a few minutes.</p>
      </div>
    </div>
  )
}

function WrenchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}