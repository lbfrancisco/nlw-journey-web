import { ArrowRight, UserPlus2 } from 'lucide-react'

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  handleOpenGuestsModal: () => void
  handleOpenConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  handleOpenGuestsModal,
  handleOpenConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-2 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        onClick={handleOpenGuestsModal}
        className="flex flex-1 items-center gap-2 text-lg text-zinc-400"
      >
        <UserPlus2 className="size-5" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100">{`${emailsToInvite.length} pessoa(s) convidada(s)`}</span>
        ) : (
          'Quem estará na viagem?'
        )}
      </button>

      <button
        onClick={handleOpenConfirmTripModal}
        className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 text-lime-950 transition-colors hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  )
}
