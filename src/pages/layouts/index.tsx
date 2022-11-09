import { GetServerSideProps, NextPage } from 'next';
import { ViewKeyboard } from '../../components';
import { LayoutModel } from '../../models';
import { supa } from '../../utils';

type ExplorePageProps = {
  layouts: LayoutModel[] | null
}

const ExplorePage: NextPage<ExplorePageProps> = ({ layouts }) => {

  if (!layouts) return <h2>No layouts</h2>



  return <>
    <div>
      {layouts.map(layout => <div>
        {/* <ViewKeyboard keys={}/> */}
        {layout.keys}
      </div>)}
    </div>
  </>

}

const getServerSideProps: GetServerSideProps<ExplorePageProps> = async () => {
  const layouts = await supa.from<LayoutModel>('layouts').select()

  return {
    props: {
      layouts: layouts.data
    }
  }
}

export default ExplorePage
export { getServerSideProps }