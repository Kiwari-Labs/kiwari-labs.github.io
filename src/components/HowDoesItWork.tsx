export const HowDoesItWork = () => {
  return (
    <div className="flex flex-col w-full h-full py-10 md:py-24">
      <div className="flex flex-col w-full md:px-0">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-center pb-5 pt-5 md:pt-0">
          How does it work?
        </h2>

        <p className="mt-4 leading-relaxed text-[#a2a2a2] text-center px-5 md:px-0 text-sm md:text-base">
          Macros are quick actions that you can run with Design Maestro
          launcher. To launch a macro you just need to choose it from the list
          or activate it with an assigned keyboard shortcut.
        </p>

        <div className="flex flex-col md:flex-row h-full mt-5">
          <div className="flex flex-col text-center items-center py-5 md:py-20 gap-y-5">
            <div className="flex items-center justify-center px-5 py-5 w-5 h-5 bg-[#FFFFFF26] rounded-full">
              <p className="font-bold text-lg">1</p>
            </div>
            <p className="font-extrabold font-lg">Install Keyboard Maestro</p>
            <p className="text-[#a2a2a2] px-5 md:px-0 text-sm md:text-base">
              Design Maestro is an extension for the Keyboard Maestro app.
              First, you need to install it on your Mac.
            </p>
          </div>

          <div className="flex flex-col text-center items-center py-5 md:py-20 gap-y-5">
            <div className="flex items-center justify-center px-5 py-5 w-5 h-5 bg-[#FFFFFF26] rounded-full">
              <p className="font-bold text-lg">2</p>
            </div>
            <p className="font-extrabold font-lg">Install Design Maestro</p>
            <p className="text-[#a2a2a2] px-5 md:px-0 text-sm md:text-base">
              Download the Design Maestro extension from our website and install
              it by double-clicking on the file.
            </p>
          </div>

          <div className="flex flex-col text-center items-center py-5 md:py-20 gap-y-5">
            <div className="flex items-center justify-center px-5 py-5 w-5 h-5 bg-[#FFFFFF26] rounded-full">
              <p className="font-bold text-lg">3</p>
            </div>
            <p className="font-extrabold font-lg">Start using the macros</p>
            <p className="text-[#a2a2a2] px-5 md:px-0 text-sm md:text-base">
              Launch the Design Maestro with ⌘⇧D and choose the macro you want
              to activate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
