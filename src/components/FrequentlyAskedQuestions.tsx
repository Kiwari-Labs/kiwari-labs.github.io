/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-5 py-10 md:py-24">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-0">
        <Image
          src="/assets/faq.jpg"
          alt="Faq image"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-3xl"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-full">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-center pb-5 pt-5 md:pt-0">
          Frequently Asked Questions
        </h2>
        <section className="section-1">
          <div className="space-y-4 mx-auto max-w-6xl px-4 md:px-6 py-3">
            <details
              className="group rounded-lg p-6 bg-[#1c1c1c] text-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <h2 className="font-bold text-base md:text-xl lg:text-2xl">
                  What is Lorem Ipsum?
                </h2>
                <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[#a2a2a2]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </details>
          </div>
        </section>
        <section className="section-2">
          <div className="space-y-4 mx-auto max-w-6xl px-4 md:px-6 py-3">
            <details
              className="group rounded-lg p-6 bg-[#1c1c1c] text-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <h2 className="font-bold text-base md:text-xl lg:text-2xl">
                  Why do we use it?
                </h2>
                <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[#a2a2a2]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </details>
          </div>
        </section>
        <section className="section-3">
          <div className="space-y-4 mx-auto max-w-6xl px-4 md:px-6 py-3">
            <details
              className="group rounded-lg p-6 bg-[#1c1c1c] text-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <h2 className="font-bold text-base md:text-xl lg:text-2xl">
                  Where does it come from?
                </h2>
                <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[#a2a2a2]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered{" "}
              </p>
            </details>
          </div>
        </section>
        <section className="section-4">
          <div className="space-y-4 mx-auto max-w-6xl px-4 md:px-6 py-3">
            <details
              className="group rounded-lg p-6 bg-[#1c1c1c] text-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <h2 className="font-bold text-base md:text-xl lg:text-2xl">
                  Where can I get some?
                </h2>
                <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[#a2a2a2]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. input.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};
