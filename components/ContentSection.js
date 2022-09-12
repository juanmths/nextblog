import ContentCard from "./ContentCard";
import RightSidebar from "./RightSidebar"

export default function SectionContent(){
    return(
        <section className="py-10 flex item-center justify-between">
          <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex">
              <div className="md:w-8/12 w-full">
                <div className="flex flex-wrap item-center">

                  <div className="md:w-6/12 w-full mb-5">
                    <ContentCard />
                  </div>
                  <div className="md:w-6/12 w-full mb-5">
                    <ContentCard />
                  </div>
                  <div className="md:w-6/12 w-full mb-5">
                    <ContentCard />
                  </div>
                  <div className="md:w-6/12 w-full mb-5">
                    <ContentCard />
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 w-full">
                  <RightSidebar />
              </div>
            </div>
          </div>
        </section>
    )
}