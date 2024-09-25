const Highlights = () => {
  return (
    <>
      <section className="mt-14 flex flex-col justify-center gap-y-20 px-6">
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-white/10 bg-black px-3 py-2">
            <p className="text-base text-AI-Purple">Everything you need </p>
          </div>
          <h1 className="text-center text-2xl font-medium text-white">
            Harness the power of AI, making search engine optimization intuitive
            and effective for all skill levels.
          </h1>
        </div>
        {/* card section */}

        <div id="cardSection" className="flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-4">
            {/* card 1 */}
            <div className="flex h-[400px] w-full flex-col items-center justify-around rounded-xl border-2 border-white/10 px-7 py-5">
              <div className="h-fit w-64">
                <img src="/holo-sphere.png" />
              </div>
              <div className="space-y-3 text-white">
                <h1 className="font-bold">SEO goal setting</h1>
                <p className="text-white/70">
                  Helps you set and achieve SEO goals with guided assistance.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative flex h-[400px] w-full flex-col justify-end overflow-clip rounded-xl border-2 border-white/10 px-7 py-10">
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#371866]"></div>
              <div className="absolute inset-10 z-0 h-full w-11/12">
                <img src="/userfriendly.png" />
              </div>
              <div className="z-10 h-fit space-y-3 self-stretch text-white">
                <h1 className="font-bold">User-friendly dashboard</h1>
                <p className="text-white/70">
                  Perform complex SEO audits and optimizations with a single
                  click.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            {/* card 1 */}
            <div className="relative flex h-[400px] w-full flex-col justify-end overflow-clip rounded-xl border-2 border-white/10 px-7 py-10">
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#371866]"></div>
              <div className="absolute inset-10 z-0 h-full w-11/12">
                <img src="/visualreport.png" />
              </div>
              <div className="z-10 h-fit space-y-3 self-stretch text-white">
                <h1 className="font-bold">Visual reports</h1>
                <p className="text-white/70">
                  Visual insights into your site’s performance.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="flex h-[400px] w-full flex-col items-center justify-around rounded-xl border-2 border-white/10 px-7 py-5">
              <div className="h-fit w-64">
                <img src="/springholo.png" />
              </div>
              <div className="space-y-3 text-white">
                <h1 className="font-bold">Smart Keyword Generator</h1>
                <p className="text-white/70">
                  Automatic suggestions and the best keywords to target.{" "}
                </p>
              </div>
            </div>
            {/* card 2 */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
