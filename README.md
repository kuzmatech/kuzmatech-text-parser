# KuzmaTech's Text Parser

A wrapper for a multitude of text formats.

In many of my projects I realised I was often re-implementing the same class intended for parsing various formats (Markdown, BBCode, etc.) and decided I would turn it into a re-usable module and release it as a module useable for others too.

Currently supported formats:
- Markdown
- BBCode

If you have an suggestions for a format simply raise an issue.

In addition to this feel free to raise a pull request for any additions you feel would be constructive.


## Usage

I feel the code is fairly self-explanatory and also contains some comments for some sections that may be semi-confusing.

### Browser Usage

```
<script type="text/javascript" src="parser.js"></script>

<script>
  KZMPARSER.render('#Example Text Here \n We can even\n -render\n - a list .')
<script>
```

The above code would render

# Example Text Here
We can even 
- render 
- a list