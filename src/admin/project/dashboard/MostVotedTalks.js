import React from 'react'
import { useSelector } from 'react-redux'
import LoaderMatchParent from '../../../baseComponents/customComponent/LoaderMatchParent'
import { getMostVotedTalkSelector } from './dashboardSelectors'
import { getSelectedProjectIdSelector } from '../core/projectSelectors'
import { useTranslation } from 'react-i18next'
import TalkVotesList from './utils/TalkVotesList'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown'

const MostVotedTalks = ({ dinoStartDelay }) => {
    const mostVotedTalks = useSelector(getMostVotedTalkSelector)
    const projectId = useSelector(getSelectedProjectIdSelector)
    const { t } = useTranslation()

    if (!mostVotedTalks) {
        return <LoaderMatchParent />
    }

    return (
        <TalkVotesList
            dataArray={mostVotedTalks}
            countKey="voteCount"
            loading={!mostVotedTalks}
            projectId={projectId}
            dinoStartDelay={dinoStartDelay}
            title={t('dashboard.mostVoted')}
            titleIcon={<ThumbsUpDownIcon />}
        />
    )
}

export default MostVotedTalks
