import showSnackbar from 'modules/app/factories/showSnackbar'
import updateSandbox from '../chains/updateSandbox'
import participateLiveBin from '../actions/participateLiveBin'
import listenToBinUpdates from '../actions/listenToBinUpdates'
import {set} from 'cerebral/operators'
import {state} from 'cerebral/tags'

export default [
  [
    listenToBinUpdates,
    participateLiveBin, {
      success: [
        set(state`bin.isLoading`, false),
        ...updateSandbox,
        ...showSnackbar('Joined live session', 5000)
      ],
      false: [
        set(state`bin.isLoading`, false),
        ...showSnackbar('Unable to join live session', 5000, 'error')
      ]
    }
  ]
]
