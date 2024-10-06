import React from "react";
import {CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CAlert} from "@coreui/react";
import ArrayFindCorrect from "./assets/Array_FindCorrect"
import ArrayGetCorrect from "./assets/Array_GetCorrect"
import ArrayInsertCorrect from "./assets/Array_InsertCorrect"
import ArrayInsertWrong from "./assets/Array_InsertWrong"
import ArrayRemoveCorrect from "./assets/Array_RemoveCorrect"
import ArrayRemoveWrong from "./assets/Array_RemoveWrong"
import ArraySetCorrect from "./assets/Array_SetCorrect"

export default function ArrayScreen() {
    return (
        <div className="Screen">
            <h1>Array</h1>
            <p className="tagline">A specified number of like-data in a set order.</p>
            <h2>Conceptualizing Arrays</h2>
            <ul>
                <li>I like to think of Arrays as a Train. Specifically, one for a zoo.</li>
                <li>We could then think of each index of an array as its own train car.</li>
                <li>It's super easy to move animals in and out of existing train cars, but it would be quite difficult
                    to add train cars and/or remove train cars.
                </li>
            </ul>
            <h2>What is the time complexity?</h2>
            <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                    <CAccordionHeader><strong>Insert: </strong><code>O(n)</code> *Dynamic arrays only</CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>In our zoo train example, think about if we had a train of size 5 train cars, and
                                suddenly had a 6th animal we needed to transport.
                            </li>
                            <li>You may think, that's easy, I'll just attach it to the end of the
                                line, <code>O(1)</code> time, easy. This is incorrect.
                            </li>
                            <ArrayInsertWrong />
                            <li>You always need to be thinking about WORST case scenario. What if you want your new
                                animal to be in the very first car? Well, even if you still want to attach your new
                                train car at the end, you have to shift all of the other animals down a car, so your new
                                animal can go in the first one. Because every animal has to move in order to account for
                                the new animal, your WORST case is <code>O(n)</code>.
                            </li>
                            <ArrayInsertCorrect />
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                    <CAccordionHeader><strong>Remove: </strong><code>O(n)</code> *Dynamic arrays only</CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>Because order matters in Arrays, you need to close the gaps. You can't just remove the
                                third train car and call it a day.
                            </li>
                            <ArrayRemoveWrong />
                            <li>You now need to move the fourth train car to where the third train car was… And the five
                                train car where the fourth train car was… so on and so forth.
                            </li>
                            <ArrayRemoveCorrect />
                            <li>Similarly to the above logic, removing something from an array
                                is <code>O(n)</code> time.
                            </li>
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                    <CAccordionHeader><strong>Get: </strong><code>O(1)</code></CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>You arrived at your new location, and you want to get the tiger out of train car #3.
                                Super easy, just go to the third train car, open the door, and get him! I don't care
                                about the other animals, I don't need to move any train cars around. All I'm doing is
                                getting an animal at a very specific index. Because arrays are in a specified order, and
                                we know our index, this is constant time. <code>O(1)</code>.
                            </li>
                            <ArrayGetCorrect />
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                    <CAccordionHeader><strong>Set: </strong><code>O(1)</code></CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>After the show, you want to put your tiger back in train car #3. Well, the train car is
                                already there from before, just go the third train car, open the door, and put the tiger
                                back inside. Similar to the logic in Get, this is constant time. <code>O(1)</code>.
                            </li>
                            <ArraySetCorrect />
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                    <CAccordionHeader><strong>Find: </strong><code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>Let's say you lost your list of which animal was in what car. And now you are trying to
                                find the elephant.
                            </li>
                            <li>Getting something from an array is easy when you know where it's located, but now we
                                don't know where its located. So, we have to go searching for it.
                            </li>
                            <li>Arrays do not provide us any clues for what animal is located where.</li>
                            <li>Because of this, we have to go train car by train car until we find our elephant. WORST
                                case, our elephant is in the very last train car. Therefore, our time complexity
                                is <code>O(n)</code>.
                            </li>
                            <ArrayFindCorrect />
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
            <h2>Problem Set</h2>
            <CAlert color="secondary">
                <strong>NOTE:</strong> For the following problems
                <ul>
                    <li>I would make sure you know syntax for arrays before working through the following problems. I
                        would highly recommend you solve these problems <i>outside</i> of IDEs. Most interviewers will
                        not let you use autocomplete. You must know syntax off the top of your head.
                    </li>
                    <li>I would highly recommend you think about time and space complexities for each one as you go.
                        It's never too early to start. Just like with algorithms, the more you practice complexity
                        analysis, the better you will be.
                    </li>
                </ul>
            </CAlert>
            <h3>Basic Problems</h3>
            <ul>
                <li><a href={"https://leetcode.com/problems/duplicate-zeros/description/"}>Given a dynamically sized IntArray, duplicate each 3.</a> Ex: [0, 2, 3, 4, 5, 3, 3, 2] would become [0, 2, 3, 3, 4, 5, 3, 3, 3, 3, 2].</li>
                <li>Given a dynamically sized IntArray, delete each 3. Ex: [0, 2, 3, 4, 5, 3, 3, 1] would become [0, 2, 4, 5, 1].</li>
                <li><a href={"https://leetcode.com/problems/two-sum/description/"}>2-Sum</a>.</li>
                <li><a href={"https://leetcode.com/problems/move-zeroes/description/"}>Given an IntArray, move all 3s to the end of the array</a>. Ex: [0, 2, 3, 4, 5, 3, 3, 1] would become [0, 2, 4, 5, 1, 3, 3, 3].</li>
            </ul>
            <h3>Advanced Problems</h3>
            <ul>
                <li><a href={"https://leetcode.com/problems/pascals-triangle/description/"}>Pascal's Triangle</a>. [2D Array].</li>
                <li><a href={"https://leetcode.com/problems/reverse-string/"}>Reverse a string in-place</a>. (In some languages, strings are immutable, in which case, use an array of characters). [2-pointer].</li>
                <li><a href={"https://leetcode.com/problems/container-with-most-water/description/"}>Container with most water</a>. [2-pointer].</li>
                <li><a href={"https://leetcode.com/problems/3sum/description/"}>3-sum</a>. [2-pointer].</li>
                <li><a href={"https://leetcode.com/problems/longest-substring-without-repeating-characters/description/"}>Given a string s, find the length of the longest substring without repeating characters</a>. Ex: "aaabcdefaghijkl" would output 12. [Sliding Window].</li>
            </ul>
        </div>
    );
}
