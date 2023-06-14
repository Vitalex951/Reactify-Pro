// <Адрес страницы, позиция скролла>
export type ScrollType = Record<string, number>

export interface ScrollSaveSchema {
    scroll: ScrollType
}
