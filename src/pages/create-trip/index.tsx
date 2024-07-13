import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../../assets/bg.svg'
import logo from '../../assets/logo.svg'
import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestsModal } from './invite-guests-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTrip() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const navigate = useNavigate()

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function handleCloseGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function handleOpenGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function handleCloseGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function handleOpenConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function handleCloseConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function handleAddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return alert('Por favor, insira um e-mail válido.')
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return alert('Por favor, insira um e-mail válido.')
    }

    if (emailsToInvite.includes(email)) {
      return alert('Este e-mail já foi adicionado a lista.')
    }

    setEmailsToInvite((prev) => [...prev, email])
    event.currentTarget.reset()
  }

  function handleRemoveEmailToInvite(email: string) {
    if (!email) return

    setEmailsToInvite((prev) => prev.filter((e) => e !== email))
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate(`/trips/`)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <img
        src={bg}
        alt=""
        className="pointer-events-none absolute -z-10 select-none"
      />
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={logo} alt="" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            handleOpenGuestsInput={handleOpenGuestsInput}
            handleCloseGuestsInput={handleCloseGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleOpenConfirmTripModal={handleOpenConfirmTripModal}
              handleOpenGuestsModal={handleOpenGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{' '}
          <a
            href="#"
            className="border-b text-zinc-300 transition-colors hover:text-zinc-100"
          >
            termos de uso
          </a>{' '}
          e{' '}
          <a
            href="#"
            className="border-b text-zinc-300 transition-colors hover:text-zinc-100"
          >
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          handleAddNewEmailToInvite={handleAddNewEmailToInvite}
          handleRemoveEmailToInvite={handleRemoveEmailToInvite}
          handleCloseGuestsModal={handleCloseGuestsModal}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          handleCloseConfirmTripModal={handleCloseConfirmTripModal}
        />
      )}
    </div>
  )
}
