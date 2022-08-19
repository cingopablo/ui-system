import {
  SandpackPredefinedTemplate,
  SandpackOptions,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import React from 'react'
import { codeboxTheme } from './Codebox.theme'
import setup from './Codebox.setup'
import { CodeboxWrapper } from './Codebox.styles'

interface CodeboxBaseProps {
  template?: SandpackPredefinedTemplate
  options?: SandpackOptions
  files: Record<string, any>
  dependencies?: Record<string, string>
  autorun?: boolean
  editorOnly?: boolean
  renderOnly?: boolean
}

interface CodeboxRenderOnly {
  autorun?: false
  renderOnly: true
}

interface CodeboxAutorun {
  autorun: true
  renderOnly?: false
}

type CodeboxProps = (CodeboxBaseProps & CodeboxRenderOnly) | (CodeboxBaseProps & CodeboxAutorun)

const defaultEditorOptions = {
  showNavigator: false,
  showInlineErrors: true,
  showLineNumbers: true,
  editorHeight: 520,
}

const defaultFilesByTemplate: Record<SandpackPredefinedTemplate, any> = {
  react: setup,
  'react-ts': '',
  vanilla: '',
  'vanilla-ts': '',
  angular: '',
  vue: '',
  vue3: '',
  svelte: '',
  solid: '',
}

export const Codebox: React.FC<CodeboxProps> = ({
  template = 'react',
  options,
  files,
  dependencies,
  autorun = true,
  renderOnly = false,
  editorOnly = false,
}) => {
  const editorPart = options?.editorWidthPercentage || 50
  const previewPart = 100 - editorPart

  return (
    <CodeboxWrapper>
      <SandpackProvider
        template={template}
        theme={codeboxTheme}
        files={{
          ...files,
          ...defaultFilesByTemplate[template],
        }}
        customSetup={{
          dependencies: dependencies || {},
        }}
        options={{ autorun }}>
        <SandpackLayout>
          {!renderOnly ? (
            <SandpackCodeEditor
              {...defaultEditorOptions}
              style={{
                height: defaultEditorOptions.editorHeight,
                flexGrow: editorPart,
                flexShrink: editorPart,
                minWidth: 700 * (editorPart / (previewPart + editorPart)),
              }}
            />
          ) : null}
          {!editorOnly ? (
            <SandpackPreview
              showNavigator={defaultEditorOptions.showNavigator}
              style={{
                height: defaultEditorOptions.editorHeight,
                flexGrow: previewPart,
                flexShrink: previewPart,
                minWidth: 700 * (previewPart / (previewPart + editorPart)),
              }}
            />
          ) : null}
        </SandpackLayout>
      </SandpackProvider>
    </CodeboxWrapper>
  )
}
