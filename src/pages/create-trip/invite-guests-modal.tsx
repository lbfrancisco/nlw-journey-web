import { AtSign, Plus, X } from 'lucide-react'
import { type FormEvent } from 'react'

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  handleCloseGuestsModal: () => void
  handleAddNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  handleRemoveEmailToInvite: (email: string) => void
}

export function InviteGuestsModal({
  emailsToInvite,
  handleCloseGuestsModal,
  handleAddNewEmailToInvite,
  handleRemoveEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-bold">Selecionar convidados</p>
            <span className="text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </span>
          </div>
          <button onClick={handleCloseGuestsModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {emailsToInvite.length > 0 &&
            emailsToInvite.map((email) => {
              return (
                <div
                  key={email}
                  className="flex items-center justify-center gap-2 rounded-md bg-zinc-800 p-2"
                >
                  <span className="">{email}</span>
                  <button onClick={() => handleRemoveEmailToInvite(email)}>
                    <X className="size-4 text-zinc-400" />
                  </button>
                </div>
              )
            })}
          {emailsToInvite.length === 0 && (
            <span className="text-sm text-zinc-400">
              Ainda não há nenhum convidado
            </span>
          )}
        </div>
        <div className="h-px w-full bg-zinc-800"></div>
        <form
          onSubmit={handleAddNewEmailToInvite}
          className="flex rounded-lg border border-zinc-800 bg-zinc-950 p-3"
        >
          <div className="flex flex-1 items-center justify-center gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite o e-mail do convidado"
              className="flex-1 bg-transparent placeholder-zinc-400 outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
            >
              Convidar
              <Plus className="size-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
