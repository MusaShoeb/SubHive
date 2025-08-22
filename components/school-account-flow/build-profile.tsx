
export default function BuildSchoolProfile () {
    return (
        <div className="rounded-lg border-4 mt-30 bg-white opacity-80 w-200 h-120 flex flex-col" 
             style={{borderColor: "var(--dark-maroon)" }}>
            <h1 className="font-medium text-25 text-[var(--honey)]"> Create your profile</h1>
            <div className="flex mx-5 m-2">
                <div className="text-[15px] text-[var(--honey)]">Gender</div>
                <div className="text-[15px] text-[var(--dark-maroon)]">Ages</div>
                <div className="text-[15px] text-[var(--burnt-orange)]">Location</div>
            </div>
             <div className="flex mx-3 m-2">
                <div className="text-[15px] text-[var(--dark-maroon)]">Subjects</div>
                <div className="text-[15px] text-[var(--honey)]">Curriculum</div>
            </div>
            <div className="flex m-2">
                <div className="text-[15px] text-[var(--burnt-orange)]">Bio</div>
            </div>

        </div>
    )
}