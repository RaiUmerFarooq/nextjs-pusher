"use client";
import { useAIStore } from "@/store/aiStore";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ResultBox = () => {
  const result = useAIStore((state) => state.result);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-10">
      {result === "" ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center animate-in fade-in zoom-in duration-500">
          <div className="relative h-64 w-64 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/AIshort.png"
              alt="AI Assistant"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div className="space-y-2 max-w-md">
            <h2 className="text-2xl font-bold tracking-tight text-foreground/80">
              How can I help you today?
            </h2>
            <p className="text-muted-foreground">
              Ask me anything and I'll do my best to provide a helpful answer.
            </p>
          </div>
        </div>
      ) : (
        <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md animate-in slide-in-from-bottom-4 duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative p-6 sm:p-8 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4 border-b pb-2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3 text-primary" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 text-foreground/90 leading-7" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="marker:text-primary/70" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4" {...props} />,
                code: ({ node, ...props }) => {
                  // @ts-expect-error - inline is not in types but passed by react-markdown
                  const { inline, className, children } = props;
                  if (inline) {
                    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props} />;
                  }
                  return <code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto my-4" {...props} />;
                },
                table: ({ node, ...props }) => <div className="overflow-x-auto my-6 rounded-lg border"><table className="w-full text-sm" {...props} /></div>,
                thead: ({ node, ...props }) => <thead className="bg-muted/50 border-b" {...props} />,
                th: ({ node, ...props }) => <th className="px-4 py-3 text-left font-medium text-muted-foreground" {...props} />,
                td: ({ node, ...props }) => <td className="px-4 py-3 border-t first:border-t-0" {...props} />,
                a: ({ node, ...props }) => <a className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />,
                hr: ({ node, ...props }) => <hr className="my-8 border-border" {...props} />,
              }}
            >
              {result}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBox;
