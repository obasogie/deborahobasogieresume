// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

/**
 * addbcResume.sol — FULL writable resume contract (per Deborah's scripts)
 * Generated: 2025-08-25T17:06:15.581937
 * Sections implemented: Proficiencies, Training, Education, Contact, Experience, Work History, Highlights, Summary
 */

contract addbcResume {  

    /* ============ INTERNAL UTIL ============ */
    function _shiftLeft(string[] storage arr, uint256 index) internal {
        require(index < arr.length, "index OOB");
        for (uint256 i = index; i + 1 < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    /* ============ PROFICIENCIES ============ */
    struct ProficiencySection { string title; string[] items; }
    string private proficienciesName;
    ProficiencySection[] private proficiencies;

    function resetProficiencies(uint256 count) public { delete proficiencies; for (uint256 i=0;i<count;i++){proficiencies.push();} }
    function setProficienciesName(string memory title) public { proficienciesName = title; }
    function setProficiencyTitle(uint256 idx, string memory title) public { require(idx<proficiencies.length,"proficiency idx"); proficiencies[idx].title=title; }
    function addProficiencyItem(uint256 idx, string memory item) public { require(idx<proficiencies.length,"proficiency idx"); proficiencies[idx].items.push(item); }
    function getProficiency(uint256 idx) public view returns(string memory,string[] memory){ require(idx<proficiencies.length,"proficiency idx"); ProficiencySection storage s=proficiencies[idx]; return(s.title,s.items);}
    function clearProficiency(uint256 idx) public { require(idx<proficiencies.length,"proficiency idx"); delete proficiencies[idx].title; delete proficiencies[idx].items; }
    function removeProficiencyItem(uint256 idx,uint256 itemIndex) public { require(idx<proficiencies.length,"proficiency idx"); _shiftLeft(proficiencies[idx].items,itemIndex);}
    function getProficienciesName() public view returns(string memory){return proficienciesName;}
    function getProficienciesCount() public view returns(uint256){return proficiencies.length;}

    /* ============ TRAINING ============ */
    struct TrainingSection { string title; string[] items; }
    TrainingSection[] private training;
    function resetTraining(uint256 count) public { delete training; for(uint256 i=0;i<count;i++){training.push();} }
    function setTrainingTitle(uint256 idx,string memory title) public { require(idx<training.length,"training idx"); training[idx].title=title; }
    function addTrainingItem(uint256 idx,string memory item) public { require(idx<training.length,"training idx"); training[idx].items.push(item); }
    function getTraining(uint256 idx) public view returns(string memory,string[] memory){ require(idx<training.length,"training idx"); TrainingSection storage s=training[idx]; return(s.title,s.items);}
    function clearTraining(uint256 idx) public { require(idx<training.length,"training idx"); delete training[idx].items; }
    function removeTrainingItem(uint256 idx,uint256 itemIndex) public { require(idx<training.length,"training idx"); _shiftLeft(training[idx].items,itemIndex);}

    /* ============ EDUCATION ============ */
    struct EducationSection { string title; string[] items; }
    string private educationName;
    EducationSection[] private education;
    function resetEducation(uint256 count) public { delete education; for(uint256 i=0;i<count;i++){education.push();} }
    function setEducationName(string memory title) public { educationName=title; }
    function setEducationTitle(uint256 idx,string memory title) public { require(idx<education.length,"education idx"); education[idx].title=title; }
    function addEducationItem(uint256 idx,string memory item) public { require(idx<education.length,"education idx"); education[idx].items.push(item); }
    function getEducation(uint256 idx) public view returns(string memory,string[] memory){ require(idx<education.length,"education idx"); EducationSection storage s=education[idx]; return(s.title,s.items);}
    function clearEducation(uint256 idx) public { require(idx<education.length,"education idx"); delete education[idx].items; delete education[idx].title; }
    function removeEducationItem(uint256 idx,uint256 itemIndex) public { require(idx<education.length,"education idx"); _shiftLeft(education[idx].items,itemIndex);}
    function getEducationName() public view returns(string memory){return educationName;}

    /* ============ CONTACT ============ */
    struct ContactSection { string[] items; }
    string private contactName;
    ContactSection[] private contact;
    function resetContact(uint256 count) public { delete contact; for(uint256 i=0;i<count;i++){contact.push();} }
    function setContactName(string memory title) public { contactName=title; }
    function addContactItem(uint256 idx,string memory item) public { require(idx<contact.length,"contact idx"); contact[idx].items.push(item);}
    function getContact(uint256 idx) public view returns(string[] memory){ require(idx<contact.length,"contact idx"); return contact[idx].items;}
    function clearContact(uint256 idx) public { require(idx<contact.length,"contact idx"); delete contact[idx].items; }
    function removeContactItem(uint256 idx,uint256 itemIndex) public { require(idx<contact.length,"contact idx"); _shiftLeft(contact[idx].items,itemIndex);}
    function getContactName() public view returns(string memory){return contactName;}

    /* ============ EXPERIENCE ============ */
    struct ExperienceSection { string title; string[] items; }
    string private experienceName;
    ExperienceSection[] private experience;
    function resetExperience(uint256 count) public { delete experience; for(uint256 i=0;i<count;i++){experience.push();} }
    function setExperienceName(string memory title) public { experienceName=title; }
    function setExperienceTitle(uint256 idx,string memory title) public { require(idx<experience.length,"experience idx"); experience[idx].title=title; }
    function addExperienceItem(uint256 idx,string memory item) public { require(idx<experience.length,"experience idx"); experience[idx].items.push(item); }
    function getExperience(uint256 idx) public view returns(string memory,string[] memory){ require(idx<experience.length,"experience idx"); ExperienceSection storage s=experience[idx]; return(s.title,s.items);}
    function clearExperience(uint256 idx) public { require(idx<experience.length,"experience idx"); delete experience[idx].items; }
    function removeExperienceItem(uint256 idx,uint256 itemIndex) public { require(idx<experience.length,"experience idx"); _shiftLeft(experience[idx].items,itemIndex);}
    function getExperienceName() public view returns(string memory){return experienceName;}

    /* ============ WORK HISTORY ============ */
    struct WorkHistorySection { string title; string[] items; }
    string private workHistoryName;
    WorkHistorySection[] private workHistory;
    function resetWorkHistory(uint256 count) public { delete workHistory; for(uint256 i=0;i<count;i++){workHistory.push();} }
    function setWorkHistoryName(string memory title) public { workHistoryName=title; }
    function setWorkHistoryTitle(uint256 idx,string memory title) public { require(idx<workHistory.length,"workHistory idx"); workHistory[idx].title=title; }
    function addWorkHistoryItem(uint256 idx,string memory item) public { require(idx<workHistory.length,"workHistory idx"); workHistory[idx].items.push(item); }
    function getWorkHistory(uint256 idx) public view returns(string memory,string[] memory){ require(idx<workHistory.length,"workHistory idx"); WorkHistorySection storage s=workHistory[idx]; return(s.title,s.items);}
    function clearWorkHistory(uint256 idx) public { require(idx<workHistory.length,"workHistory idx"); delete workHistory[idx].items; }
    function removeWorkHistoryItem(uint256 idx,uint256 itemIndex) public { require(idx<workHistory.length,"workHistory idx"); _shiftLeft(workHistory[idx].items,itemIndex);}
    function getWorkHistoryName() public view returns(string memory){return workHistoryName;}

    /* ============ HIGHLIGHTS ============ */
    struct HighlightsSection { string title; string[] items; }
    string private highlightsName;
    HighlightsSection[] private highlights;
    function resetHighlights(uint256 count) public { delete highlights; for(uint256 i=0;i<count;i++){highlights.push();} }
    function setHighlightsName(string memory title) public { highlightsName=title; }
    function setHighlightsTitle(uint256 idx,string memory title) public { require(idx<highlights.length,"highlights idx"); highlights[idx].title=title; }
    function addHighlightsItem(uint256 idx,string memory item) public { require(idx<highlights.length,"highlights idx"); highlights[idx].items.push(item); }
    function getHighlights(uint256 idx) public view returns(string memory,string[] memory){ require(idx<highlights.length,"highlights idx"); HighlightsSection storage s=highlights[idx]; return(s.title,s.items);}
    function clearHighlights(uint256 idx) public { require(idx<highlights.length,"highlights idx"); delete highlights[idx].items; }
    function removeHighlightsItem(uint256 idx,uint256 itemIndex) public { require(idx<highlights.length,"highlights idx"); _shiftLeft(highlights[idx].items,itemIndex);}
    function getHighlightsName() public view returns(string memory){return highlightsName;}

    /* ============ SUMMARY ============ */
    string[] private summaries;
    function addSummary(string memory summary) public { summaries.push(summary); }
    function updateSummary(uint256 index,string memory newSummary) public { require(index<summaries.length,"summary idx"); summaries[index]=newSummary; }
    function removeSummary(uint256 index) public { _shiftLeft(summaries,index); }
    function clearSummary() public { delete summaries; }
    function getSummary(uint256 index) public view returns(string memory){ require(index<summaries.length,"summary idx"); return summaries[index]; }
    function getSummaries() public view returns(string[] memory){ return summaries; }
}
