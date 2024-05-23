import hljs from "highlight.js/lib/common"
import typescript from "highlight.js/lib/languages/typescript"
export default function TemplateNav() {

    hljs.registerLanguage('typescript', typescript);
    const highlightedCode = hljs.highlight(
        '<span>Hello World!</span>',
        { language: 'xml' }
      ).value
  return (
    <div className="relative w-full h-full p-6 bg-black">
    <div className="max-w-5xl mx-auto min-w-screen h-full flex"> 
    <div className="text-5xl mx-auto text-gray-300">
        Navbar
    </div>
    </div>
</div>
  )
}
