import Posts  from "../components/Posts"
import MiniProfile from "../components/MiniProfile"
import Suggestions from "../components/Suggestions"
import { useSession } from "next-auth/react"


function Feed() {
    const { data: session } = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`} 
        >
            <section className="col-span-2">
                <Posts />
            </section>

            {session && (
                  <section className="hidden xl:inline-grid md:col-span-1">
                    <div className="fixed top-10">
                      <MiniProfile />
                      <Suggestions /> {/* ⇦後で何か追加してもいいかなと思っている */}
                    </div>
                  </section>
            )}
        </main>
    );
}

export default Feed;