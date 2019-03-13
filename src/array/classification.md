





# ArraySortStability
一个集合键值全相同或者全不同，键值无所谓，如果一个集合中存在多种排序字段，稳定性很重要，否则经过不同
的排序，得到的结果会产生不一致

* Stable
BubbleSort

* UnStable
CompSort

###Can we make any sorting algorithm stable?
Any given sorting algo which is not stable can be modified to be stable. There can be sorting algo specific ways to make it stable, but in general, any comparison based sorting algorithm which is not stable by nature can be modified to be stable by changing the key comparison operation so that the comparison of two keys considers position as a factor for objects with equal keys



--paradigm--

#BruteForce[https://en.wikipedia.org/wiki/Brute-force_search]
* BubbleSort
* CompSort
* CycleSort
* HeapSort

#DivideAndConquer
* CountingSort