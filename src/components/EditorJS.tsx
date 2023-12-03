import Editor, { OutputData } from "@editorjs/editorjs"
import Header from "@editorjs/header"
// @ts-ignore
import Paragraph from "@editorjs/paragraph"
import React, { memo, useEffect, useRef } from "react"

enum LogLevels {
  VERBOSE = 'VERBOSE',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

type Props = {
  data: OutputData,
  onChange: React.Dispatch<React.SetStateAction<OutputData>>,
  readOnly?: boolean
}

const EDITOR_TOOLS = {
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true
  },
}

const EditorJS = ({ data, onChange, readOnly = false }: Props) => {
  const ejsInstance = useRef<Editor>()

  const initEditor = () => {
    const editor = new Editor({
      holder: 'editorjs',
      logLevel: LogLevels.ERROR,
      data,
      onReady: () => {
        console.log('Editor is ready')
      },
      onChange: async (api, _event) => {
        const editorData: OutputData = await api.saver.save()

        onChange(editorData)
      },
      autofocus: true,
      tools: EDITOR_TOOLS,
      readOnly,
    })

    ejsInstance.current = editor
  }

  useEffect(() => {
    if (!ejsInstance.current) {
      initEditor()
    }

    return () => {
      if (ejsInstance.current) {
        ejsInstance.current == undefined
      }
    }
  }, [])

  return (
    <>
      <div id="editorjs"></div>
    </>
  )
}

export default memo(EditorJS)
