import Button from '@/components/atoms/Button'
import Filter from '@/components/atoms/Filter'
import {IconPlus} from '@/components/atoms/Icon'

export default function Home() {
  return (
    <main className="flex flex-col px-6 pt-8 2xl:mx-auto 2xl:max-w-5xl 2xl:pt-32">
      <div className="flex items-center justify-between">
        <div id="header__left">
          <h1 className="heading__m md:heading__l text-clay-theme-ebony-darker dark:text-white">Invoices</h1>
          <p className="body__variant text-gray-theme-normal dark:text-gray-theme-light">No invoices</p>
        </div>

        <div id="header__right" className="flex items-center gap-4">
          <div id="header__right-filter">
            <Filter/>
          </div>
          <Button customClass="button__one flex items-center"
                  childCustomClass="relative flex items-center gap-3">
            <div className="rounded-full bg-white p-4">
              <IconPlus className="fill-purple-theme-normal"/>
            </div>
            <div>New{' '}<span className="hidden md:inline-block">Invoice</span></div>
          </Button>
        </div>
      </div>

      <div className="flex-1">

      </div>
    </main>
  )
}
