import Image from 'next/image'
import Banner from './components/Header/Banner'
import { MediaDevices } from './Providers/MediaDevices'
export default function Home() {

  return (
    <MediaDevices.Provider value={[]}>
    <main>
<Banner/>
    </main>
    </MediaDevices.Provider>
  )
}
