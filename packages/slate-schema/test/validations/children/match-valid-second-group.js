/** @jsx jsx */

import { jsx } from 'slate-hyperscript'

export const schema = [
  {
    for: 'node',
    match: { a: true },
    validate: {
      children: [
        { max: 1, match: { b: true } },
        { max: 1, match: { b: true } },
      ],
    },
  },
]

export const input = (
  <value>
    <element a>
      <element b>one</element>
      <element b>one</element>
    </element>
  </value>
)

export const output = input