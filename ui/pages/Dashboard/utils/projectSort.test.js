/* eslint-disable no-undef */

import { computeSortedProjectGuids } from './projectSort'

import { getVisibleProjectGuids } from './visibleProjectsSelector'
import { getProjectsByGuid } from '../../../redux/rootReducer'
import {
  SORT_BY_PROJECT_NAME,
  SORT_BY_PROJECT_SAMPLES,
  SORT_BY_NUM_FAMILIES,
  SORT_BY_NUM_INDIVIDUALS,
  SORT_BY_DATE_CREATED,
  SORT_BY_DATE_LAST_ACCESSED,
  SORT_BY_TAGS,
  SORT_BY_ANALYSIS,
} from '../constants'

import { STATE1 } from '../fixtures'

describe('tests', () => {

  test('computeSortedProjectGuids', () => {
    const projectGuids = getVisibleProjectGuids(STATE1)
    const projectsByGuid = getProjectsByGuid(STATE1)

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_PROJECT_NAME, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_PROJECT_NAME, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_PROJECT_SAMPLES, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_PROJECT_SAMPLES, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_NUM_FAMILIES, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_NUM_FAMILIES, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_NUM_INDIVIDUALS, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_NUM_INDIVIDUALS, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_DATE_CREATED, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_DATE_CREATED, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_DATE_LAST_ACCESSED, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_DATE_LAST_ACCESSED, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_TAGS, -1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_TAGS, 1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])

    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_ANALYSIS, 1)).toEqual(['R0237_1000_genomes_demo', 'R0202_tutorial'])
    expect(computeSortedProjectGuids(projectGuids, projectsByGuid, SORT_BY_ANALYSIS, -1)).toEqual(['R0202_tutorial', 'R0237_1000_genomes_demo'])
  })
})
