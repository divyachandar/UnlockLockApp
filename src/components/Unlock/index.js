import {useState} from 'react'
import {
  AppContainer,
  Image,
  DeviceText,
  AppButton,
  LockContainer,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, onToggleLock] = useState(true)

  const onToggleDevice = () => {
    onToggleLock(prevLock => !prevLock)
  }

  const altText = isLocked ? 'lock' : 'unlock'
  const imgUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const devTxt = isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const btnTxt = isLocked ? 'Unlock' : 'Lock'
  return (
    <AppContainer>
      <LockContainer>
        <Image src={imgUrl} alt={altText} />
        <DeviceText>{devTxt}</DeviceText>
      </LockContainer>
      <AppButton type="button" onClick={onToggleDevice}>
        {btnTxt}
      </AppButton>
    </AppContainer>
  )
}

export default Unlock
