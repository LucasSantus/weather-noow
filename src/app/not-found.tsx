"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-2 rounded-lg">
        <motion.span className="text-9xl font-bold text-slate-200">404</motion.span>
        <motion.span className="text-xl font-medium text-slate-200">
          A página solicitada não foi encontrada!
        </motion.span>

        <motion.div>
          <Link href="/" className="mt-4 text-blue-500 underline hover:text-blue-400">
            Ir para a tela principal
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
