/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.setNodes(editor, { key: true }, { match: 'inline' })
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        <anchor />
        word
      </inline>
      <focus />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
      <inline key>
        <anchor />
        word
      </inline>
      <focus />
    </block>
  </value>
)