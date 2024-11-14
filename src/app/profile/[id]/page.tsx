export default function UserProfile({params}:any) {
  return (
    <div className="flex justify-center items-center flex-col py-3 min-h-screen">
        <h1 className="font-mono text-5xl">Profile</h1>
        <p className="font-mono">Profile Page
            <span className="text-3xl">{params.id}</span>
        </p>

    </div>
  )
}
