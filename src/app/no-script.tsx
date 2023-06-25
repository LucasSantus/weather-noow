"use client";

interface NoScriptProps {}

export const NoScript: React.FC<NoScriptProps> = () => (
  <noscript>
    <style type="text/css">
      {`
        * {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        #root {
          display: none;
        }
      `}
    </style>
    <div className="flex h-screen w-full items-center justify-center bg-slate-900 text-2xl text-white">
      O JavaScript está desativado, active-o para que o sistema funcione corretamente!
    </div>
  </noscript>
);
