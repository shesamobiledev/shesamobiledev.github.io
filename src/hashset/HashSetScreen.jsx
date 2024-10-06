import React from "react";
import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
    CAlert,
    CCallout,
    CCarousel,
    CCarouselItem
} from "@coreui/react";
import HashSetInsert1 from "./assets/HashSet_Insert1";
import HashSetInsert9 from "./assets/HashSet_Insert9";
import HashSetInsert17 from "./assets/HashSet_Insert17";
import HashSetInsert85 from "./assets/HashSet_Insert85";
import HashSetInsert87 from "./assets/HashSet_Insert87";
import HashSetInsert87_2 from "./assets/HashSet_Insert87_2";
import HashSetInsertNeg96 from "./assets/HashSet_Insert-96";
import HashSetImplementationArrayArray from "./assets/HashSet_Implementation_ArrayArray";
import HashSetImplementationArrayLinkedList from "./assets/HashSet_Implementation_ArrayLinkedList";
import HashSetImplementationFlatArray from "./assets/HashSet_Implementation_FlatArray";
import HashSetInsertUnhappyPath from "./assets/HashSet_Insert_UnhappyPath";
import HashSetRemoveUnhappyPath from "./assets/HashSet_Remove_UnhappyPath";
import HashSetRemoveNeg96 from "./assets/HashSet_Remove-96";
import HashSetRemoveNeg7 from "./assets/HashSet_Remove-7";
import HashSetRemoveNeg44 from "./assets/HashSet_Remove-44";
import HashSetRemove82 from "./assets/HashSet_Remove82";
import HashSetRemove21 from "./assets/HashSet_Remove21";

export default function HashSetScreen() {
    const [activeInsertIndex, setActiveInsertIndex] = React.useState(0)
    const [activeRemoveIndex, setActiveRemoveIndex] = React.useState(0)

    const getHashFunction = "fun getHash(s: String): Int { return s.length }"
    const arrayArrayType = "Array<Array<String>>"
    const arrayLinkedListType = "Array<LinkedList<String>>"
    return (
        <div className="Screen">
            <h1>HashSet</h1>
            <p className="tagline">A collection of unique values, with no specified order.</p>
            <h2>Conceptualizing HashSets</h2>
            <ul>
                <li>A HashSet is the Crayola Crayon box of computer science.</li>
                <li>When you open up a new box of crayons, you have a bunch of different colors, in fact you have no
                    duplicates. You don't ever have two red crayons, and if your friend offered you a red crayon because
                    yours broke, you wouldn't keep both, you would remove the broken one and put the new one there
                    instead. There are no duplicates in sets.
                </li>
                <li>On top of that, there is no set spot for each crayon. You pick up the red, and you put it back down
                    where the blue crayon is because that's the next one you pick up. There is no specific order to
                    sets.
                </li>
            </ul>
            <h2>Visualizing HashSets</h2>
            <p><b>NOTE:</b> A HashSet is an <i>abstract</i> data structure. Unlike an Integer, which just <i>is</i> a
                32-bit number, HashSets are really a structure with defined principles that can be implemented in many
                ways.
            </p>
            <h3>Principles of a HashSet</h3>
            <ul>
                <li><b><code className="codeValue">VALUES</code> are unique, <code
                    className="codeHash">HASHES</code> may not be.</b> Take for example, you have the following
                    function: <code>{getHashFunction}</code> In this case, the words "cat" and "dog" can both appear in
                    the set, as they are unique <code className="codeValue">VALUES</code>, however, they share the
                    same <code className="codeHash">HASH</code> which is 3. If we tried adding a duplicate <code
                        className="codeValue">VALUE</code>, it will overwrite the existing entry of the same <code
                        className="codeValue">VALUE</code>, or, it just won't be added. Take, for example, if we tried
                    adding "cat" again, we would see "cat" has already been added, and would just ignore the addition of
                    the second "cat" <code className="codeValue">VALUE</code>.
                </li>
                <li><b>There is no specific order to a set.</b> Instead of an ordered-index like we saw in Arrays, we
                    use something called a <code className="codeHash">HASH</code> to lookup our <code
                        className="codeValue">VALUE</code> in the set. There is no limit to what the <code
                        className="codeHash">HASH</code> key can be, though typically you will see it be a number of
                    some kind. It really just depends on how the HashSet is implemented under the hood.
                </li>
                <li><b>Ideally, all <code className="codeValue">VALUES</code> in a HashSet would have a unique <code
                    className="codeHash">HASH</code>.</b> When two or more <code
                    className="codeValue">VALUES</code> have the same <code className="codeHash">HASH</code>, it's
                    called a collision. The more collisions a set has, the worse it will perform.
                </li>
            </ul>
            <h3>Implementation of a HashSet</h3>
            <ul>
                <li>There are several ways to implement a HashSet. I will not cover all of them, but I will show a few
                    examples just to highlight some differences. This exact syntax isn't as important as the
                    foundational principles covered in the previous section.
                </li>
                <li>Let's look at the example above again. We have "cat" and "dog" that both collide at 3. Let's think
                    about how we would implement the HashSet under the hood. Perhaps you are already picturing an Array
                    of some kind. Let's say we have an Array of size 8 to begin with. In our case, we add "cat", and it
                    inserts "cat" into our array at index 3. Now, we want to add "dog". We figure out the <code
                        className="codeHash">HASH</code> is 3, we go to input into our array at index 3 and oh no, we
                    already have an element there, "cat". What do we do? Collisions can be handled in multiple ways.
                    Again, HashSets are not a set thing, you can implement them in many different ways. There is no
                    right or wrong way here. Some are slightly better than others, but all have their pros and cons. The
                    best strategy is to just avoid as many collisions as you can, while always be preparing to handle
                    them. Let's go over a few implementation options.
                </li>
                <ul>
                    <li>Some may handle this by having the HashSet be an <code>{arrayArrayType}</code>. With a 2D-array,
                        you can just keep adding all strings of the same length to the same sub-array.
                    </li>
                    <HashSetImplementationArrayArray/>
                    <li>Some may handle this by having the HashSet be an <code>{arrayLinkedListType}</code>. Where a
                        "cat" node would point to a "dog" node, etc.
                    </li>
                    <HashSetImplementationArrayLinkedList/>
                    <li>Others may not want sub-collections, but would prefer everything to live in the main array. So,
                        perhaps they handle collisions by moving it to the next index forward. "cat" is already at index
                        3, so we will put dog in index 4, instead.
                    </li>
                    <HashSetImplementationFlatArray/>
                </ul>
                <li>At this point, you may be thinking, "Wait a minute, if all <code
                    className="codeValue">VALUES</code> are unique, and it's best to have unique <code
                    className="codeHash">HASHES</code>, why don't we just use the <code
                    className="codeValue">VALUE</code> as the <code className="codeHash">HASH</code>?" Honestly, it's a
                    pretty interesting question, but it all comes back to the idea that HashSets are an ABSTRACT data
                    structure.
                </li>
                <ul>
                    <li>Let's say we are using that Array to implement our HashSet. For ease, let's assume our <code
                        className="codeValue">VALUES</code> are integers.
                    </li>
                    <ul>
                        <li>Let's add 3 to our Array. Easy, <code>array[3] = 3</code></li>
                        <li>Now, let's add 1,000,000,000,000. <code>array[1,000,000,000,000] =
                            [1,000,000,000,000]</code></li>
                        <li>Finally, let's add -12. <code>array[-12] = -12</code></li>
                    </ul>
                    <li>Wait a minute. Maybe some of you have already spotted the issue, but let's go over some.</li>
                    <ul>
                        <li>First, you cannot have a negative index on an array. If you tried doing <code>array[-12] =
                            -12</code> your program would crash.
                        </li>
                        <li>Secondly, let's assume you knew with confidence your <code
                            className="codeHash">HASHES</code> would be positive, as is the case in our length function
                            above. Even in that case, your indexes could vary widely. In our example above, our array
                            would be at least size 1,000,000,000,001. But you only have 3 elements in it. Space
                            complexity is just as important as time. You would not want to allocate all of that memory
                            for an array that is only holding 3 elements.
                        </li>
                        <li>And while it may not be super apparent here, with our <code
                            className="codeValue">VALUES</code> being integers, there are also more obvious examples of
                            why using the <code className="codeValue">VALUE</code> for our <code
                                className="codeHash">HASH</code> is a bad idea. For example, what if we aren't storing
                            numbers, but instead Strings, or Objects?
                        </li>
                    </ul>
                </ul>
                <li>There is a bunch of research done on how best to implement a HashSet. It's quite heavy to get into
                    here, and it doesn't matter too much in interviews to be honest, as you will mostly be using the
                    built-in syntax used by whatever your preferred language is. Just know, <i>generally</i>, you never
                    want your array (or whatever memory you are setting aside) to be more than double the size of the
                    set itself.
                </li>
            </ul>
            <h2>What is the time complexity?</h2>
            <CCallout color="secondary">
                <strong>Things to keep in mind...</strong>
                <ul>
                    <li>For all examples, I will be using the idea of implementing our HashSet with
                        an <code>{arrayArrayType}</code>. This is solely do to the fact that I've <a href="/array">already
                            covered Arrays</a> in a different post, and reviewed time complexities there.
                    </li>
                    <li><b>GenerateHash:</b> <code>O(1)</code></li>
                    <ul>
                        <li><code className="codeHash">HASH</code> functions should always run in constant time. While
                            you can technically implement a <code className="codeHash">HASH</code> function however you
                            want, you never want to add time complexity here.
                        </li>
                    </ul>
                </ul>
            </CCallout>
            <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                    <CAccordionHeader><strong>Insert: </strong><code>O(1)</code>, but also kind
                        of <code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <CCarousel interval={false} controls indicators
                                   onSlide={(index) => setActiveInsertIndex(index)}>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert87/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert87_2/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert9/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsertNeg96/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert85/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert1/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetInsert17/></div>
                            </CCarouselItem>
                        </CCarousel>

                        {activeInsertIndex === 0 && <Caption_HashSet_Insert87/>}
                        {activeInsertIndex === 1 && <Caption_HashSet_Insert87_2/>}
                        {activeInsertIndex === 2 && <Caption_HashSet_Insert9/>}
                        {activeInsertIndex === 3 && <Caption_HashSet_InsertNeg96/>}
                        {activeInsertIndex === 4 && <Caption_HashSet_Insert85/>}
                        {activeInsertIndex === 5 && <Caption_HashSet_Insert1/>}
                        {activeInsertIndex === 6 && <Caption_HashSet_Insert17/>}
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                    <CAccordionHeader><strong className="emphasisAccordionHeader">Insert*: </strong>Visualizing
                        the worst case of <code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <p>As we saw above in our insert examples, our <code>O(n)</code> case happens when we need to
                            re-size, and therefore, <code className="codeHash">REHASH</code> our HashSet. Hopefully,
                            you've already picked up on what that looks like, but just to be sure, the following depicts
                            the <code>O(n)</code> edge-case when <i>inserting</i> a <code
                                className="codeValue">VALUE</code> into our
                            HashSet.</p>
                        <HashSetInsertUnhappyPath/>
                        <p>When we reached our ideal capacity (50% in this example), we must resize, and
                            therefore, <code className="codeHash">REHASH</code> every <code
                                className="codeValue">VALUE</code> in our HashSet. If we have <code>n</code> <code
                                className="codeValue">VALUES</code> in our HashSet, then our time complexity will
                            be <code>O(n)</code>.</p>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                    <CAccordionHeader><strong>Remove: </strong><code>O(1)</code>, but also kind
                        of <code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <CCarousel interval={false} controls indicators
                                   onSlide={(index) => setActiveRemoveIndex(index)}>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetRemoveNeg96/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetRemoveNeg7/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetRemoveNeg44/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetRemove82/></div>
                            </CCarouselItem>
                            <CCarouselItem>
                                <div className="carousel-wrapper"><HashSetRemove21/></div>
                            </CCarouselItem>
                        </CCarousel>

                        {activeRemoveIndex === 0 && <Caption_HashSet_RemoveNeg96/>}
                        {activeRemoveIndex === 1 && <Caption_HashSet_RemoveNeg7/>}
                        {activeRemoveIndex === 2 && <Caption_HashSet_RemoveNeg44/>}
                        {activeRemoveIndex === 3 && <Caption_HashSet_Remove82/>}
                        {activeRemoveIndex === 4 && <Caption_HashSet_Remove21/>}
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                    <CAccordionHeader><strong className="emphasisAccordionHeader">Remove*: </strong>Visualizing
                        the worst case
                        of <code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <p>
                            As we saw above in our remove examples, our <code>O(n)</code> case happens when every
                            single <code className="codeValue">VALUE</code> collides with one another, and the <code
                            className="codeValue">VALUE</code> we are looking for is the very last element in that
                            sub-collection. Therefore, we must iterate over every single element to find the <code
                            className="codeValue">VALUE</code> we are looking for.
                        </p>
                        <HashSetRemoveUnhappyPath/>
                        <p>
                            When every <code className="codeValue">VALUE</code> collides at the same <code
                            className="codeHash">HASH</code>, and the <code className="codeValue">VALUE</code> we want
                            to
                            remove is the last in our sub-collection, we must iterate over the entire sub-collection
                            of <code>n</code> elements in order to find and remove the <code
                            className="codeValue">VALUE</code> we want to delete. Thus, we see a time complexity
                            of <code>O(n)</code>.
                        </p>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                    <CAccordionHeader><strong>Get: </strong><code>O(1)</code>, but also kind
                        of <code>O(n)</code></CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>Hopefully you are starting to see the pattern here.</li>
                            <li>What does the get function do under the hood?</li>
                            <ol>
                                <li>Figure out where the <code className="codeValue">VALUE</code> is we are trying to
                                    get. To do this, we must generate a <code
                                        className="codeHash">HASH</code> key. <code>O(1)</code>
                                </li>
                                <li>Find the sub-collection at the <code
                                    className="codeHash">HASH</code> index. <code>O(1)</code>
                                </li>
                                <li>Iterate over the sub-collection to find the <code
                                    className="codeValue">VALUE</code> we want to return.
                                </li>
                                <ul>
                                    <li>On <b>AVERAGE</b>, with low-collision sets. <code>O(1)</code></li>
                                    <li>At <b>WORST</b>, with high-collisions. <code>O(n)</code></li>
                                </ul>
                                <li>Return that <code className="codeValue">VALUE</code>. <code>O(1)</code>
                                </li>
                            </ol>
                            <li>As you can see, in most cases, it is <code>O(1)</code>, and so that is recommended when
                                determining time complexity, however, it could be up to <code>O(n)</code> if all of
                                your <code
                                    className="codeValue">VALUES</code> are located at the same <code
                                    className="codeHash">HASH</code>.
                            </li>
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                    <CAccordionHeader><strong>Contains: </strong><code>O(1)</code></CAccordionHeader>
                    <CAccordionBody>
                        <ul>
                            <li>Patterns, patterns, patterns.</li>
                            <li>What does the contains function do under the hood?</li>
                            <ol>
                                <li>Figure out where the <code className="codeValue">VALUE</code>would
                                    be if it was in the set. To do this, we must generate a <code
                                        className="codeHash">HASH</code> key. <code>O(1)</code>
                                </li>
                                <li>Find the sub-collection at the <code
                                    className="codeHash">HASH</code> index. <code>O(1)</code>
                                </li>
                                <li>Iterate over the sub-collection to find the <code
                                    className="codeValue">VALUE</code> we are looking for exists.
                                </li>
                                <ul>
                                    <li>On <b>AVERAGE</b>, with low-collision sets. <code>O(1)</code></li>
                                    <li>At <b>WORST</b>, with high-collisions. <code>O(n)</code></li>
                                </ul>
                                <li>Return true if we found the <code className="codeValue">VALUE</code>. <code>O(1)</code>
                                </li>
                            </ol>
                            <li>One last time, we see that in most cases, if HashSets are used the way they are intended
                                - with a great <code className="codeHash">HASH</code> algorithm to minimize collisions,
                                our time complexity will be <code>O(1)</code> - which is the recommended time to use in
                                most cases. In worst case scenario, it can be <code>O(n)</code> however.
                            </li>
                        </ul>
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
            <h2>Problem Set</h2>
            <CAlert color="secondary">
                <strong>NOTE:</strong> For the following problems
                <ul>
                    <li>I would make sure you know syntax for HashSets before working through the following problems. I
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
                <li><a href={"https://leetcode.com/problems/contains-duplicate/description/"}>Given an IntArray,
                    determine if the array contains a duplicate</a></li>
                <li><a href={"https://leetcode.com/problems/intersection-of-two-arrays/description/"}>Intersection of
                    two arrays</a></li>
            </ul>
            <h3>Advanced Problems</h3>
            <ul>
                <li><a href={"https://leetcode.com/problems/contains-duplicate-iii/"}>Contains Duplicate III</a></li>
            </ul>
        </div>
    )
        ;
}

function Caption_HashSet_Insert87() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 87</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique.
                <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have an 87 in our HashMap. In this
                case, we do not already have an 87, so we are good to continue.</p>
            <p><b>NOTE:</b> As we will see later on, our <code>contains</code> function can be <code>O(n)</code> time,
                however, as it most-often runs in <code>O(1)</code> time, I will be using <code>O(1)</code> to describe
                this step moving forward.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 87, we output a <code
                className="codeHash">HASH</code> of 7.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 7, we now want to find the sub-collection at index
                7 of our array. In a well-created HashSet, very few collisions would occur. As this is the first item we
                are adding to our HashSet, there is no chance of a collision.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>Next, we insert our <code className="codeValue">VALUE</code> of 87 into the sub-collection we found at
                index 7.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal
                balance. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>After adding our <code className="codeValue">VALUE</code> of 87, we have 1 item in our HashSet.
                Typically, we want our HashSet to be about 50% filled at all times, because we only have 1 out of 8
                slots, or 12.5% of our slots filled, we do <i>not</i> need to increase our space. We skip this step for
                now.</p>
        </div>
    )
}

function Caption_HashSet_Insert87_2() {
    return (
        <div>
            <h5>VALUE: 87</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>Here, we see we are trying to add a <code className="codeValue">VALUE</code> of 87 that is already in the
                HashSet. As this is not a <i>unique</i> element, we do not move to steps 2-5.</p>
        </div>
    )
}

function Caption_HashSet_Insert9() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 9</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have a 9 in our HashMap. In this
                case, we do not already have an 9, so we are good to continue.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 9, we output a <code
                className="codeHash">HASH</code> of 1.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 1, we now want to find the sub-collection at index
                1 of our array. Again, we see there is no collision to worry about, as there are no items located at
                index 1 yet.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>Next, we insert our <code className="codeValue">VALUE</code> of 9 into the sub-collection we found at
                index 1.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal
                balance. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>Because we only have 2 out of 8 slots, or 25% of our slots filled, we do <i>not</i> need to increase our
                space. We skip this step for now.</p>
        </div>
    )
}

function Caption_HashSet_InsertNeg96() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: -96</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have a -96 in our HashMap. In this
                case, we do not already have an -96, so we are good to continue.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input -96, we output a <code
                className="codeHash">HASH</code> of 0.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 0, we now want to find the sub-collection at index
                0 of our array. Again, we see there is no collision to worry about, as there are no items located at
                index 0 yet.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>Next, we insert our <code className="codeValue">VALUE</code> of -96 into the sub-collection we found at
                index 0.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal
                balance. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>Because we only have 3 out of 8 slots, or 37.5% of our slots filled, we do <i>not</i> need to increase
                our space. We skip this step for now.</p>
        </div>
    )
}

function Caption_HashSet_Insert85() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 85</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have an 85 in our HashMap. In this
                case, we do not already have 85, so we are good to continue.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 85, we output a <code
                className="codeHash">HASH</code> of 5.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 5, we now want to find the sub-collection at index
                5 of our array. Again, we see there is no collision to worry about, as there are no items located at
                index 5 yet.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>Next, we insert our <code className="codeValue">VALUE</code> of 85 into the sub-collection we found at
                index 5.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal balance. <code>O(n)</code></h6>
            We now have filled 4 items in our HashSet, or 50% of our slots filled. To make sure we limit our chances
            of collisions, we want to increase the size of our HashSet by doubling the size of our Array. When we
            re-size our HashSet, we need to <code className="codeHash">REHASH</code> all of our <code
            className="codeValue">VALUES</code> to determine the new <code
            className="codeHash">HASH</code> indices for each <code className="codeValue">VALUE</code> in our
            set. In order to <code className="codeHash">REHASH</code>, we must repeat steps 1-4 for each of
            our <code className="codeValue">VALUES</code> we've already added to our HashSet. Even though steps 1-4
            are <code>O(1)</code> time complexity on their own, we will repeat the steps for the amount of items we
            have in our HashSet. If we have <code>n</code> items in our HashMap at the time we <code
            className="codeHash">REHASH</code>, this would make our time complexity <code>O(n * 1)</code> or,
            simplified, <code>O(n)</code> Our hash function would remain the same,
            or <code>{generateHashFunction}</code>, so let's quickly run through what our new <code
            className="codeHash">HASHES</code> will be for each of our <code className="codeValue">VALUES</code>.
            <ul>
                <li>87 % 16 = 7</li>
                <li>9 % 16 = 9</li>
                <li>-96 % 16 = 0</li>
                <li>85 % 16 = 5</li>
            </ul>
            <p>At this point, you just find the sub-collection at each of those <code
                className="codeHash">HASH</code> indexes, and insert the <code className="codeValue">VALUES</code> into
                the sub-collections found there.</p>
        </div>
    )
}

function Caption_HashSet_Insert1() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 1</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have a 1 in our HashMap. In this
                case, we do not already have a 1, so we are good to continue.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 1, we output a <code
                className="codeHash">HASH</code> of 1.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 1, we now want to find the sub-collection at index
                1 of our array. Even though originally inputting 9 into our HashSet gave us an index of 1, because we
                had to <code className="codeHash">REHASH</code> our HashMap, our <code
                    className="codeValue">VALUE</code> of 9 got a new <code className="codeHash">HASH</code> index of 9.
                So, we see there is no collision to worry about, as there are no items located at index 1 currently.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>Next, we insert our <code className="codeValue">VALUE</code> of 1 into the sub-collection we found at
                index 1.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal
                balance. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>Because we only have 5 out of 16 slots, or 31.3% of our slots filled, we do <i>not</i> need to increase
                our space. We skip this step for now.</p>
        </div>
    )
}

function Caption_HashSet_Insert17() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 17</h5>
            <h6>1. Check if our <code className="codeValue">VALUE</code> is unique. <code>O(1)</code></h6>
            <p>HashSets only contain unique <code className="codeValue">VALUES</code>. We should first call
                our <code>contains</code> function to make sure we don't already have a 17 in our HashMap. In this
                case, we do not already have 17, so we are good to continue.</p>
            <h6>2. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 17, we output a <code
                className="codeHash">HASH</code> of 1.</p>
            <h6>3. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 1, we now want to find the sub-collection at index
                1 of our array. Here, we see we found our first collision. We already have an item in our
                sub-collection. A previous <code className="codeValue">VALUE</code> of 1 can be found at <code
                    className="codeHash">HASH</code>1.</p>
            <h6>4. Insert <code className="codeValue">VALUE</code> into the sub-collection. <code>O(1)</code></h6>
            <p>We now want to add our new <code className="codeValue">VALUE</code> of 17 to our HashSet. Again, see
                above for multiple ways to handle collisions, but in our case, we are going to simply add our new <code
                    className="codeValue">VALUE</code> of 17 to our sub-collection found at index 1. This may look
                something like <code>arr[HASH].add(VALUE)</code>. As you can see, we are using a 2D-array to keep track
                of our HashSet in order to eloquently handle collisions. There is <i>always</i> a chance of collisions
                happening, so always be prepared to handle them. In this case, we were prepared by always having a
                sub-collection at each index.</p>
            <h6>5. If necessary, increase HashSet space to maintain an optimal
                balance. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>Because we only have 6 out of 16 slots, or 37.5% of our slots filled, we do <i>not</i> need to increase
                our space. We skip this step for now.</p>
        </div>
    )
}

function Caption_HashSet_RemoveNeg96() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: -96</h5>
            <h6>1. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Unlike inserting, we typically do <i>not</i> call a <code>contains</code> function. As you will see later
                on, while <code>contains</code> typically runs in <code>O(1)</code> time, it <i>can</i> be up
                to <code>O(n)</code> time in our worst case scenario. With inserting, we don't need to iterate over our
                sub-collection, as we are just adding a <code className="codeValue">VALUE</code> to the end.</p>
            <p>However, when <i>removing</i> a <code className="codeValue">VALUE</code>, we will always need to iterate
                over our sub-collection in order to find the exact <code className="codeValue">VALUE</code> we are
                looking to remove. Because of this distinction, we typically do not call
                the <code>contains</code> function when removing a <code className="codeValue">VALUE</code>. While it
                wouldn't asymptotically change the time complexity - <code>O(2n)</code> still reduces
                to <code>O(n)</code> - it would still be more time, so we might as well just make
                it <code>O(n)</code> to begin with.</p>
            <p>Therefore, in our example, assuming our hash function is <code>{generateHashFunction}</code>, if we input
                -96, we output a <code className="codeHash">HASH</code> of 0.</p>
            <h6>2. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 0, we now want to find the sub-collection at index
                0 of our array.</p>
            <h6>3. Iterate over our sub-collection until we found the <code
                className="codeValue">VALUE</code> we want to remove. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>At <code className="codeHash">HASH</code> index 0, we only have a single item - the <code
                className="codeValue">VALUE</code> we are looking for. While this
                step <i>could</i> be <code>O(n)</code> time, in this average case, we see the time complexity is really
                only <code>O(1)</code>.</p>
            <h6>4. Remove <code className="codeValue">VALUE</code> from our sub-collection. <code>O(1)</code>, could
                also potentially be <code>O(n)</code></h6>
            <p>Similarly to <code>generateHash</code>, we typically do not want to add time complexity to this step. In
                our example, we are using arrays. Which, as we've covered in our <a href="/array">Array</a> study guide,
                we can see removing an element in a dynamically resizing array can be <code>O(n)</code> time. We could
                set the value to null in our Array instead in order to prevent extra time here, or we could use a
                LinkedList solution that would allow us to remove a node in <code>O(1)</code> time. It's worth noting,
                even if we choose to use a dynamically resizing array, our time complexity will still
                be <code>O(2n)</code> total to
                remove the <code className="codeValue">VALUE</code> (or <code>O(3n)</code> if all of our <code
                    className="codeValue">VALUES</code> are located in the same sub-collection), which would all be
                reduced to the same <code>O(n)</code> time complexity asymptotically. Because there are ways to
                guarantee this step is <code>O(1)</code> time complexity, <code>O(1)</code> will be used moving
                forward.</p>
            <p>We remove our <code className="codeValue">VALUE</code> of -96 from the sub-collection.</p>
        </div>
    )
}

function Caption_HashSet_RemoveNeg7() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: -7</h5>
            <h6>1. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input -7, we output a <code
                className="codeHash">HASH</code> of 1.</p>
            <h6>2. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 1, we now want to find the sub-collection at index
                1 of our array.</p>
            <h6>3. Iterate over our sub-collection until we found the <code
                className="codeValue">VALUE</code> we want to remove. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>At <code className="codeHash">HASH</code> index 1, we only have a single item. Here, we see we still have
                our average case of only one <code className="codeValue">VALUE</code> located in our sub-collection, but
                we see that the <code className="codeValue">VALUE</code> we want to remove isn't equal to the <code
                    className="codeValue">VALUE</code> we have in our HashSet.</p>
            <h6>4. Remove <code className="codeValue">VALUE</code> from our sub-collection. <code>O(1)</code></h6>
            <p>In this case, we would return early, as the <code className="codeValue">VALUE</code> we want to remove
                does not exist in the HashSet. Our HashSet wouldn't change.</p>
        </div>
    )
}

function Caption_HashSet_RemoveNeg44() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 44</h5>
            <h6>1. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input -44, we output a <code
                className="codeHash">HASH</code> of 4.</p>
            <h6>2. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 4, we now want to find the sub-collection at index
                4 of our array.</p>
            <h6>3. Iterate over our sub-collection until we found the <code
                className="codeValue">VALUE</code> we want to remove. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>At <code className="codeHash">HASH</code> index 4, we again only have a single item.</p>
            <h6>4. Remove <code className="codeValue">VALUE</code> from our sub-collection. <code>O(1)</code></h6>
            <p>We remove our <code className="codeValue">VALUE</code> of -44 from the sub-collection.</p>
        </div>
    )
}

function Caption_HashSet_Remove82() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 82</h5>
            <h6>1. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 82, we output a <code
                className="codeHash">HASH</code> of 2.</p>
            <h6>2. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 2, we now want to find the sub-collection at index
                2 of our array.</p>
            <h6>3. Iterate over our sub-collection until we found the <code
                className="codeValue">VALUE</code> we want to remove. <code>O(n)</code></h6>
            <p>At <code className="codeHash">HASH</code> index 2, we see we have multiple items due to collisions when
                inserting the <code className="codeValue">VALUES</code> into our HashSet. We see here we have a worst
                case scenario, so our time complexity is <code>O(n)</code> as we must iterate over the entire
                sub-collection until we found the <code className="codeValue">VALUE</code> we want to remove. In this
                case, we can the <code className="codeValue">VALUE</code> we want to remove is the very last element in
                our sub-collection. So we must iterate over every single <code className="codeValue">VALUE</code> in
                order to find it.</p>
            <h6>4. Remove <code className="codeValue">VALUE</code> from our sub-collection. <code>O(1)</code></h6>
            <p>We remove our <code className="codeValue">VALUE</code> of 82 from the sub-collection.</p>
        </div>
    )
}

function Caption_HashSet_Remove21() {
    const generateHashFunction = "fun generateHash(value: Int): Int {return value % arraySize}"
    return (
        <div>
            <h5>VALUE: 21</h5>
            <h6>1. Generate <code className="codeHash">HASH</code>. <code>O(1)</code></h6>
            <p>Assuming our hash function is <code>{generateHashFunction}</code>, if we input 21, we output a <code
                className="codeHash">HASH</code> of 5.</p>
            <h6>2. Find sub-collection at the <code className="codeHash">HASH</code> index. <code>O(1)</code></h6>
            <p>Because our <code className="codeHash">HASH</code> is 5, we now want to find the sub-collection at index
                5 of our array.</p>
            <h6>3. Iterate over our sub-collection until we found the <code
                className="codeValue">VALUE</code> we want to remove. <code><s>O(n)</s></code> <code>O(1)</code></h6>
            <p>In this case, we see there are <i>no</i> elements in our sub-collection at <code
                className="codeHash">HASH</code> 5. There is nothing to iterate over, so we can return early.</p>
            <h6>4. Remove <code className="codeValue">VALUE</code> from our sub-collection. <code>O(1)</code></h6>
            <p>In this case, as we returned early, our HashSet wouldn't change.</p>
        </div>
    )
}
