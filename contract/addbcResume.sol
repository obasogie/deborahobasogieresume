// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;


contract addbcResume {

/* ============ OWNERSHIP ============ */
address public owner;
constructor() { owner = msg.sender; }
modifier onlyOwner() {
    require(msg.sender == owner, "not owner");
    _;
}

    /* ============ INTERNAL UTILS ============ */
    function _shiftLeft(string[] storage arr, uint256 index) internal {
        require(index < arr.length, "index OOB");
        for (uint256 i = index; i + 1 < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    /* ============ COPY STRINGS ============ */
    function _copyStrings(string[] storage src) internal view returns (string[] memory dst) {
        dst = new string[](src.length);
        for (uint256 i = 0; i < src.length; i++) {
            dst[i] = src[i];
        }
    }

    /* =======================================================
     *                      CONTACT
     * ======================================================= */
    struct ContactSection { string title; string[] items; }
    string private contactName;
    ContactSection[] private contacts;

    /// 1) resetContact(uint256 count)
    function resetContact(uint256 count) public  onlyOwner {
        delete contacts;
        for (uint256 i = 0; i < count; i++) contacts.push();
    }

    /// 2) setContactName(string title)
    function setContactName(string memory title) public  onlyOwner { contactName = title; }

    /// 3) addContactItem(uint256 idx, string item)
    function addContactItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < contacts.length, "idx OOB");
        contacts[idx].items.push(item);
    }

    /// 4) getContact(uint256 idx)
    function getContact(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < contacts.length, "idx OOB");
        return (contacts[idx].title, _copyStrings(contacts[idx].items));
    }

    /// 5) clearContact(uint256 idx)
    function clearContact(uint256 idx) public  onlyOwner {
        require(idx < contacts.length, "idx OOB");
        delete contacts[idx].items;
        contacts[idx].title = "";
    }

    /// 6) removeContactItem(uint256 idx, uint256 itemIndex)
    function removeContactItem(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < contacts.length, "idx OOB");
        require(itemIndex < contacts[idx].items.length, "item OOB");
        _shiftLeft(contacts[idx].items, itemIndex);
    }

    /// 7) getContactName()
    function getContactName() public view returns (string memory) { return contactName; }

    /* =======================================================
     *                   PROFICIENCIES
     * ======================================================= */
    struct ProficiencySection { string title; string[] items; }
    string private proficienciesName;
    ProficiencySection[] private proficiencies;

    /// 1) resetProficiencies(uint256 count)
    function resetProficiencies(uint256 count) public  onlyOwner {
        delete proficiencies;
        for (uint256 i = 0; i < count; i++) proficiencies.push();
    }

    /// 2) setProficienciesName(string title)
    function setProficienciesName(string memory title) public  onlyOwner { proficienciesName = title; }

    /// 3) setProficiencyTitle(uint256 idx, string title)
    function setProficiencyTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < proficiencies.length, "idx OOB");
        proficiencies[idx].title = title;
    }

    /// 4) addProficiencyItem(uint256 idx, string item)
    function addProficiencyItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < proficiencies.length, "idx OOB");
        proficiencies[idx].items.push(item);
    }

    /// 5) getProficiency(uint256 idx)
    function getProficiency(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < proficiencies.length, "idx OOB");
        return (proficiencies[idx].title, _copyStrings(proficiencies[idx].items));
    }

    /// 6) removeProficiencyItem(uint256 idx, uint256 itemIndex)
    function removeProficiencyItem(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < proficiencies.length, "idx OOB");
        require(itemIndex < proficiencies[idx].items.length, "item OOB");
        _shiftLeft(proficiencies[idx].items, itemIndex);
    }

    /// 7) clearProficiency(uint256 idx)
    function clearProficiency(uint256 idx) public  onlyOwner {
        require(idx < proficiencies.length, "idx OOB");
        delete proficiencies[idx].items;
        proficiencies[idx].title = "";
    }

    /// 8) removeProficiency(uint256 idx, uint256 itemIndex)
    function removeProficiency(uint256 idx, uint256 itemIndex) public  onlyOwner {
        removeProficiencyItem(idx, itemIndex);
    }

    /// 9) getProficiencies()
    function getProficiencies() public view returns (uint256) {
        return proficiencies.length;
    }

    /// 10) getProficienciesCount()
    function getProficienciesCount() public view returns (uint256) {
        return proficiencies.length;
    }

    /* =======================================================
     *                      TRAINING
     * ======================================================= */
    struct TrainingSection { string title; string[] items; }
    TrainingSection[] private trainings;

    /// 1) resetTraining(uint256 count)
    function resetTraining(uint256 count) public  onlyOwner {
        delete trainings;
        for (uint256 i = 0; i < count; i++) trainings.push();
    }

    /// 2) setTrainingTitle(uint256 idx, string title)
    function setTrainingTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < trainings.length, "idx OOB");
        trainings[idx].title = title;
    }

    /// 3) addTrainingItem(uint256 idx, string item)
    function addTrainingItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < trainings.length, "idx OOB");
        trainings[idx].items.push(item);
    }

    /// 4) clearTraining(uint256 idx)
    function clearTraining(uint256 idx) public  onlyOwner {
        require(idx < trainings.length, "idx OOB");
        delete trainings[idx].items;
        trainings[idx].title = "";
    }

    /// 5) removeTrainingItem(uint256 idx, uint256 itemIndex)
    function removeTrainingItem(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < trainings.length, "idx OOB");
        require(itemIndex < trainings[idx].items.length, "item OOB");
        _shiftLeft(trainings[idx].items, itemIndex);
    }

    /// 6) getTraining(uint256 idx)
    function getTraining(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < trainings.length, "idx OOB");
        return (trainings[idx].title, _copyStrings(trainings[idx].items));
    }

    /// 7) getTrainingItem(uint256 idx, uint256 itemIndex)
    function getTrainingItem(uint256 idx, uint256 itemIndex) public view returns (string memory) {
        require(idx < trainings.length, "idx OOB");
        require(itemIndex < trainings[idx].items.length, "item OOB");
        return trainings[idx].items[itemIndex];
    }

    /* =======================================================
     *                      EDUCATION
     * ======================================================= */
    struct EducationSection { string title; string[] items; }
    string private educationName;
    EducationSection[] private educations;

    /// 1) resetEducation(uint256 count)
    function resetEducation(uint256 count) public  onlyOwner {
        delete educations;
        for (uint256 i = 0; i < count; i++) educations.push();
    }

    /// 2) setEducationName(string title)
    function setEducationName(string memory title) public  onlyOwner { educationName = title; }

    /// 3) setEducationTitle(uint256 idx, string title)
    function setEducationTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < educations.length, "idx OOB");
        educations[idx].title = title;
    }

    /// 4) addEducationItem(uint256 idx, string item)
    function addEducationItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < educations.length, "idx OOB");
        educations[idx].items.push(item);
    }

    /// 5) getEducation(uint256 idx)
    function getEducation(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < educations.length, "idx OOB");
        return (educations[idx].title, _copyStrings(educations[idx].items));
    }

    /// 6) clearEducation(uint256 idx)
    function clearEducation(uint256 idx) public  onlyOwner {
        require(idx < educations.length, "idx OOB");
        delete educations[idx].items;
        educations[idx].title = "";
    }

    /// 7) removeEducationItem(uint256 idx, uint256 itemIndex)
    function removeEducationItem(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < educations.length, "idx OOB");
        require(itemIndex < educations[idx].items.length, "item OOB");
        _shiftLeft(educations[idx].items, itemIndex);
    }

    /// 8) getEducationItem(uint256 idx, uint256 itemIndex)
    function getEducationItem(uint256 idx, uint256 itemIndex) public view returns (string memory) {
        require(idx < educations.length, "idx OOB");
        require(itemIndex < educations[idx].items.length, "item OOB");
        return educations[idx].items[itemIndex];
    }

    /// 9) getEducationName()
    function getEducationName() public view returns (string memory) { return educationName; }

    /* =======================================================
     *                      SUMMARY
     * ======================================================= */
    struct SummarySection { string title; string[] items; }
    string private summaryName;
    SummarySection[] private summaries;

    /// 1) setSummaryName(string title)
    function setSummaryName(string memory title) public  onlyOwner { summaryName = title; }

    /// 2) setSummaryTitle(uint256 idx, string title)
    function setSummaryTitle(uint256 idx, string memory title) public  onlyOwner {
        if (idx >= summaries.length) {
            uint256 need = idx + 1 - summaries.length;
            for (uint256 i = 0; i < need; i++) summaries.push();
        }
        summaries[idx].title = title;
    }

    /// 3) addSummaryItem(uint256 idx, string item)
    function addSummaryItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < summaries.length, "idx OOB");
        summaries[idx].items.push(item);
    }

    /// 4) getSummary(uint256 idx)
    function getSummary(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < summaries.length, "idx OOB");
        return (summaries[idx].title, _copyStrings(summaries[idx].items));
    }

    /// 5) clearSummary(uint256 idx)
    function clearSummary(uint256 idx) public  onlyOwner {
        require(idx < summaries.length, "idx OOB");
        delete summaries[idx].items;
        summaries[idx].title = "";
    }

    /// 6) removeSummaryItem(uint256 idx, uint256 itemIndex)
    function removeSummaryItem(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < summaries.length, "idx OOB");
        require(itemIndex < summaries[idx].items.length, "item OOB");
        _shiftLeft(summaries[idx].items, itemIndex);
    }

    /* =======================================================
     *                      HIGHLIGHTS
     * ======================================================= */
    struct HighlightsSection { string title; string[] items; }
    string private highlightsName;
    HighlightsSection[] private highlights;

    /// 1) resetHighlights(uint256 count)
    function resetHighlights(uint256 count) public  onlyOwner {
        delete highlights;
        for (uint256 i = 0; i < count; i++) highlights.push();
    }

    /// 2) setHighlightsName(string title)
    function setHighlightsName(string memory title) public  onlyOwner { highlightsName = title; }

    /// 3) setHighlightsTitle(uint256 idx, string title)
    function setHighlightsTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < highlights.length, "idx OOB");
        highlights[idx].title = title;
    }

    /// 4) addHighlightsItem(uint256 idx, string item)
    function addHighlightsItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < highlights.length, "idx OOB");
        highlights[idx].items.push(item);
    }

    /// 5) getHighlights(uint256 idx)
    function getHighlights(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < highlights.length, "idx OOB");
        return (highlights[idx].title, _copyStrings(highlights[idx].items));
    }

    /// 6) clearHighlights(uint256 idx)
    function clearHighlights(uint256 idx) public  onlyOwner {
        require(idx < highlights.length, "idx OOB");
        delete highlights[idx].items;
        highlights[idx].title = "";
    }

    /// 7) removeHighlights(uint256 idx, uint256 itemIndex)
    function removeHighlights(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < highlights.length, "idx OOB");
        require(itemIndex < highlights[idx].items.length, "item OOB");
        _shiftLeft(highlights[idx].items, itemIndex);
    }

    /* =======================================================
     *                    EXPERIENCE
     * ======================================================= */
    struct ExperienceSection { string title; string[] items; }
    string private experienceName;
    ExperienceSection[] private experiences;

    /// 1) resetExperience(uint256 count)
    function resetExperience(uint256 count) public  onlyOwner {
        delete experiences;
        for (uint256 i = 0; i < count; i++) experiences.push();
    }

    /// 2) setExperienceName(string title)
    function setExperienceName(string memory title) public  onlyOwner { experienceName = title; }

    /// 3) setExperienceTitle(uint256 idx, string title)
    function setExperienceTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < experiences.length, "idx OOB");
        experiences[idx].title = title;
    }

    /// 4) addExperienceItem(uint256 idx, string item)
    function addExperienceItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < experiences.length, "idx OOB");
        experiences[idx].items.push(item);
    }

    /// 5) clearExperience(uint256 idx)
    function clearExperience(uint256 idx) public  onlyOwner {
        require(idx < experiences.length, "idx OOB");
        delete experiences[idx].items;
        experiences[idx].title = "";
    }

    /// 6) removeExperience(uint256 idx, uint256 itemIndex)
    function removeExperience(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < experiences.length, "idx OOB");
        require(itemIndex < experiences[idx].items.length, "item OOB");
        _shiftLeft(experiences[idx].items, itemIndex);
    }

    /// 7) getExperience(uint256 idx)
    function getExperience(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < experiences.length, "idx OOB");
        return (experiences[idx].title, _copyStrings(experiences[idx].items));
    }

    /// 8) getExperienceItem(uint256 idx, uint256 itemIdx)
    function getExperienceItem(uint256 idx, uint256 itemIdx) public view returns (string memory) {
        require(idx < experiences.length, "idx OOB");
        require(itemIdx < experiences[idx].items.length, "item OOB");
        return experiences[idx].items[itemIdx];
    }

    /// 9) getProfessionalExperience()
    function getProfessionalExperience() public view returns (string memory) {
        return experienceName;
    }

    /// 10) getProfessionalExperienceItem()
    function getProfessionalExperienceItem() public pure returns (string memory) {
        return "";
    }

    /* =======================================================
     *                    WORK HISTORY
     * ======================================================= */
    struct WorkHistorySection { string title; string[] items; }
    string private workHistoryName;
    WorkHistorySection[] private workhistories;

    /// 1) resetWorkHistory(uint256 count)
    function resetWorkHistory(uint256 count) public  onlyOwner {
        delete workhistories;
        for (uint256 i = 0; i < count; i++) workhistories.push();
    }

    /// 2) setWorkHistoryName(string title)
    function setWorkHistoryName(string memory title) public  onlyOwner { workHistoryName = title; }

    /// 3) setWorkHistoryTitle(uint256 idx, string title)
    function setWorkHistoryTitle(uint256 idx, string memory title) public  onlyOwner {
        require(idx < workhistories.length, "idx OOB");
        workhistories[idx].title = title;
    }

    /// 4) addWorkHistoryItem(uint256 idx, string item)
    function addWorkHistoryItem(uint256 idx, string memory item) public  onlyOwner {
        require(idx < workhistories.length, "idx OOB");
        workhistories[idx].items.push(item);
    }

    /// 5) clearWorkHistory(uint256 idx)
    function clearWorkHistory(uint256 idx) public  onlyOwner {
        require(idx < workhistories.length, "idx OOB");
        delete workhistories[idx].items;
        workhistories[idx].title = "";
    }

    /// 6) removeWorkHistory(uint256 idx, uint256 itemIndex)
    function removeWorkHistory(uint256 idx, uint256 itemIndex) public  onlyOwner {
        require(idx < workhistories.length, "idx OOB");
        require(itemIndex < workhistories[idx].items.length, "item OOB");
        _shiftLeft(workhistories[idx].items, itemIndex);
    }

    /// 7) getWorkHistory(uint256 idx)
    function getWorkHistory(uint256 idx) public view returns (string memory, string[] memory) {
        require(idx < workhistories.length, "idx OOB");
        return (workhistories[idx].title, _copyStrings(workhistories[idx].items));
    }

    /// 8) getWorkHistoryItem(uint256 idx, uint256 itemIdx)
    function getWorkHistoryItem(uint256 idx, uint256 itemIdx) public view returns (string memory) {
        require(idx < workhistories.length, "idx OOB");
        require(itemIdx < workhistories[idx].items.length, "item OOB");
        return workhistories[idx].items[itemIdx];
    }
}
