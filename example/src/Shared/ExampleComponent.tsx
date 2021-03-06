import React from 'react'
import {
  CollapsibleProps,
  RefComponent,
  ContainerRef,
  CollapsibleRef,
} from 'react-native-collapsible-tab-view'
import { useAnimatedRef } from 'react-native-reanimated'

import Albums from './Albums'
import Article from './Article'
import Contacts from './Contacts'
import { HEADER_HEIGHT } from './Header'
import Tabs, { TabNames } from './Tabs'

type Props = {
  emptyContacts?: boolean
} & Partial<CollapsibleProps<TabNames>>

const Example = React.forwardRef<CollapsibleRef<TabNames>, Props>(
  ({ emptyContacts, ...props }, ref) => {
    const containerRef = useAnimatedRef<ContainerRef>()
    const albumsRef = useAnimatedRef<RefComponent>()
    const articleRef = useAnimatedRef<RefComponent>()
    const contactsRef = useAnimatedRef<RefComponent>()

    const [refMap] = React.useState({
      article: articleRef,
      albums: albumsRef,
      contacts: contactsRef,
    })

    return (
      <Tabs.Container
        ref={ref}
        containerRef={containerRef}
        headerHeight={HEADER_HEIGHT}
        refMap={refMap}
        {...props}
      >
        <Article />
        <Albums />
        <Contacts emptyContacts={emptyContacts} />
      </Tabs.Container>
    )
  }
)

export default Example
