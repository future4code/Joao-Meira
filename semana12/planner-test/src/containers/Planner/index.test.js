import React from 'react'
import { shallow } from "enzyme"
import { Planner, PlannerWrapper, PlannerTitle } from "."
import valley from '../../img/background-valley.jpg'



describe ('testing Planner subComponents', () => {
    test('renderization', () => {

        const renderedCompoenent = shallow(<Planner img={valley}/>)

        const findWrapper = renderedCompoenent.find(PlannerWrapper)
        const findPlannerTitle = renderedCompoenent.find(PlannerTitle)

        expect(findWrapper).toHaveLength(1)
        expect(findPlannerTitle).toHaveLength(1)
    })
})