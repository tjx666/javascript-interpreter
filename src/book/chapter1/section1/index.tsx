import React from 'react'
import { Section } from "../../../framework/components/book";
import { MarkdownDocument } from "../../../framework/components/markdown-document";

const title = '第1节、Jison 的安装'

const document = () => <MarkdownDocument>
  {/* jsx-markdown */}
  # {title}
  [[TOC]]
</MarkdownDocument>

export const section1: Section = {
  title,
  document,
}