import PlusSquareIcon from "@/components/icons/PlusSquareIcon"
import XSquareIcon from "@/components/icons/XSquareIcon"
import { useEffect, useRef, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import EditorJS from "@/components/EditorJS"
import { OutputData } from "@editorjs/editorjs"

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm

const sourceLabels = [
  "WEB",
  "PHP",
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "Backend",
  "Frontend"
]

export default function PostCreate() {
  const labelsMenuRef = useRef<HTMLDivElement>(null)
  const buttonLabelsMenuRef = useRef<HTMLDivElement>(null)
  const now = new Date()

  const [editorText, setEditorText] = useState<OutputData>({
    time: now.getTime(),
    blocks: [],
  })
  const [image, setImage] = useState<string>()
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [labels, setLabels] = useState<string[]>()
  const [openLabelsMenu, setOpenlabelsMenu] = useState<boolean>(false)
  const [labelsMenuStyle, setLabelsMenuStyle] = useState<string>("")

  const debounced = useDebouncedCallback((value) => {
    filterLabels(value)
  }, 500)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (files) {
      const file = files[0]

      if (file.type.match(imageTypeRegex)) {
        const imageURL = URL.createObjectURL(file)

        setImage(imageURL)

        return
      }
    }
    console.error("Selected images are not valid")
  }

  function filterLabels(filter: string): void {
    const filteredLabels = sourceLabels.filter((label) => {
      if (label.toLowerCase().includes(filter) && !(selectedLabels.includes(label))) {
        return true
      }
    })

    setLabels(filteredLabels)
  }

  function chooseLabel(labelName: string): void {
    setSelectedLabels([
      ...selectedLabels,
      labelName
    ]
    )
  }

  function removeFromSelectedLabels(labelName: string): void {
    const filteredLabels = selectedLabels.filter((label) => {
      if (label != labelName) return true
    })

    setSelectedLabels(filteredLabels)
  }

  function toggleLabelsMenu() {
    const windowWidth = window.innerWidth
    const buttonLabelCordinate = buttonLabelsMenuRef.current?.getBoundingClientRect()
    const labelsMenuCordinate = labelsMenuRef.current?.getBoundingClientRect()

    if (buttonLabelCordinate && labelsMenuCordinate) {
      const futureXCordinate = buttonLabelCordinate?.x + labelsMenuCordinate?.width

      if (futureXCordinate > windowWidth) {
        setLabelsMenuStyle(`left-[-${labelsMenuCordinate.width - buttonLabelCordinate.width}px]`)
      } else {
        setLabelsMenuStyle("")
      }
    }
    setOpenlabelsMenu(!openLabelsMenu)
  }

  useEffect(() => {
    const availableLabels = sourceLabels.filter((label) => !(selectedLabels.includes(label)))
    setLabels(availableLabels)
  }, [selectedLabels])

  return (
    <>
      {/* Button Action */}
      <div className="w-full border-2 border-black">
        {/* header */}
        <div className="min-h-[32px] border-b-2 border-black flex justify-between items-center px-1.5">
          <div>
            Action
          </div>

          <div className="flex gap-1">
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black bg-black"></div>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 min-h-[100px] gap-2 sm:gap-0 py-3.5 sm:max-h-[340px]">
          <button className={`sm:row-start-1 sm:row-end-1 w-full h-full max-w-[250px] min-h-[40px] sm:max-h-[50px] font-bold bg-red-400 hover:bg-red-300 border-2 border-black place-self-center flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] `}>
            Cancel
          </button>
          <button className={`sm:row-start-1 sm:row-end-1 w-full h-full max-w-[250px] min-h-[40px] sm:max-h-[50px] font-bold bg-myGreen hover:bg-red-300 border-2 border-black place-self-center flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] `}>
            Save As Draft
          </button>
          <button className={`sm:row-start-1 sm:row-end-1 w-full h-full max-w-[250px] min-h-[40px] sm:max-h-[50px] font-bold hover:bg-black hover:text-white border-2 border-black place-self-center flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] `}>
            Publish
          </button>
        </div>
      </div>
      {/* End Button Action*/}

      {/* Thumbnail Card */}
      <div className="w-full border-2 border-black mt-4">
        {/* header */}
        <div className="min-h-[32px] border-b-2 border-black flex justify-between items-center px-1.5">
          <div>
            Thumbnail
          </div>

          <div className="flex gap-1">
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black bg-black"></div>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 grid-rows-1 min-h-[219px] py-3.5 max-h-[340px]">
          <label className="grid grid-cols-1 grid-rows-1">
            {image &&
              <img src={image} alt="thumbnail" className="col-start-1 col-end-1 row-start-1 row-end-1 h-full object-scale-down mx-auto" />
            }

            <div className={`col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full max-w-[250px] max-h-[50px] bg-myGreen hover:bg-red-300 border-2 border-black place-self-center flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] `}>
              {image ? 'Change' : 'Upload'} Thumbnail
            </div>

            <input type="file" accept="image/*" className="hidden" onChange={(e) => changeHandler(e)} />
          </label>
        </div>
      </div>
      {/* End Thumbnail Card */}

      <div className="mt-14">
        {/* Post Title */}
        <input type="text" className="text-2xl w-full outline-0" placeholder="Post Title" />

        {/* Post Date And Labels */}
        <div className="w-full mt-4 border-t-2 border-black py-2 flex items-center">
          <div className="flex-none pr-2 border-r border-black">
            {('0' + (now.getDate())).slice(-2)}-{('0' + (now.getMonth() + 1)).slice(-2)}-{now.getFullYear()}
          </div>
          <div className="flex-none pl-2 border-l border-black flex">
            + Tags
          </div>
          <div className="overflow-x-auto no-scrollbar mx-1">
            {selectedLabels &&
              selectedLabels.map(label => (
                <a
                  href="#"
                  key={label}
                  className="group mx-1 px-2.5 py-1 bg-black text-white"
                  onClick={() => removeFromSelectedLabels(label)}
                >
                  <span className="group-hover:hidden">{label}</span>
                  <span className="hidden group-hover:inline">Remove</span>
                </a>
              ))
            }
          </div>
          <div className="relative">
            <div ref={buttonLabelsMenuRef} className="w-6 h-6 cursor-pointer" onClick={() => toggleLabelsMenu()}>
              {openLabelsMenu ? <XSquareIcon /> : <PlusSquareIcon />}
            </div>

            <div
              ref={labelsMenuRef}
              className={`${!openLabelsMenu ? "h-0 border-0" : "z-10 border-2 bg-white"} ${labelsMenuStyle} mt-2 absolute overflow-hidden border-black w-36`}
            >
              <div className="p-1">
                <input
                  type="text"
                  placeholder="Label name"
                  className="w-full outline-none"
                  onChange={(e) => debounced(e.target.value)}
                />
              </div>
              <div className="flex flex-col p-1 border-t-2 border-black">
                {
                  labels &&
                  labels.map((label) => (<a href="#" key={label} onClick={() => chooseLabel(label)}>{label}</a>))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 font-sans prose w-full max-w-full">
          <EditorJS data={editorText} onChange={setEditorText} />
        </div>
      </div >
    </>
  )
}
